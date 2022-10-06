package com.neutron.waste_recycle_backend.service.impl;

import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.PageInfo;
import com.neutron.waste_recycle_backend.service.GoodsInfoService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicUpdate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

@Service
public class GoodsInfoServiceImpl implements GoodsInfoService {

    @Value("${baseUrl}")
    private String baseUrl;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Resource
    private RedisTemplate<String, PageInfo<GoodsInfo>> redisTemplate;

    @Resource(name = "goodsInfoListRedisTemplate")
    private RedisTemplate<String, List<GoodsInfo>> redisTemplate1;

    /**
     * 添加商品
     *
     * @param goodsInfo
     * @return
     */
    @Override
    public String addGoods(GoodsInfo goodsInfo) {

        String k = "category_*";
        Set<String> keys1 = redisTemplate1.keys(k);
        redisTemplate1.delete(keys1);

        goodsInfo.setSailedNum(0);  //初始化售卖量
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formatTime = simpleDateFormat.format(date);
        //插入数据库时间
        goodsInfo.setUploadTime(formatTime);
        mongoTemplate.insert(goodsInfo);

        //删除缓存
        String key = goodsInfo.getOpenid() + "_*";
        Set<String> keys = redisTemplate.keys(key);
        if(keys != null){
            redisTemplate.delete(keys);
        }

        return "insert success";
    }

    /**
     * 根据用户id和商品名来删除商品
     *
     * @param openid
     * @param goodsName
     * @return
     */
    @Override
    public Integer deleteGoodsUserSailed(String openid, String goodsName) {

        Query query = new Query();
        query.addCriteria(Criteria.where("openid").is(openid).and("goodsName").is(goodsName));

        GoodsInfo info = mongoTemplate.findOne(query, GoodsInfo.class, "goodsInfo");
        //清除缓存
        String key = openid + "_*";
        Set<String> keys = redisTemplate.keys(key);
        if(keys != null){
            redisTemplate.delete(keys);
        }

        DeleteResult goodsInfo = mongoTemplate.remove(query, GoodsInfo.class, "goodsInfo");
        String s = String.valueOf(goodsInfo.getDeletedCount());

        int state = Integer.parseInt(s);
        if (state == 0) {
            return state;
        }

        assert info != null;
        String pictureId = info.getPictureId(); //获得图片id，进行删除

        Mono<Integer> stringMono = WebClient.create()
                .delete()
                .uri(baseUrl + "/grid?pictureId=" + pictureId)
                .retrieve()
                .bodyToMono(Integer.class);

        return stringMono.block();
    }

    /**
     * 根据商品id来修改商品信息
     *
     * @param goodsInfo
     * @return
     */
    @Override
    public Integer updateGoodsInfoById(GoodsInfo goodsInfo) {

        //清除缓存
        String key = goodsInfo.getOpenid() + "_*";
        Set<String> keys = redisTemplate.keys(key);
        if(keys != null){
            redisTemplate.delete(keys);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(goodsInfo.getId()));

        //修改时间
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formatTime = simpleDateFormat.format(date);

        Document document = new Document();
        mongoTemplate.getConverter().write(goodsInfo, document);
        document.put("uploadTime", formatTime);
        Update update = new BasicUpdate(new Document("$set", document));
        UpdateResult goodsInfo1 = mongoTemplate.updateFirst(query, update, GoodsInfo.class, "goodsInfo");

        String s = String.valueOf(goodsInfo1.getModifiedCount());

        return Integer.parseInt(s);
    }

    /**
     * 分页查询商品信息
     *
     * @param openid
     * @param page
     * @param pageSize
     * @return
     */
    @Override
    public PageInfo<GoodsInfo> goodsInfoPagination(String openid, int page, int pageSize) {

        PageInfo<GoodsInfo> pageInfo = null;
        String key = openid + "_" + page + "_" + pageSize;
        pageInfo = redisTemplate.opsForValue().get(key);

        if(pageInfo != null){
            return pageInfo;
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("openid").is(openid))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"));
        long totalCount = mongoTemplate.count(query, "goodsInfo");

        PageRequest pageRequest = PageRequest.of(page, pageSize);
        List<GoodsInfo> goodsInfoList = mongoTemplate.find(query.with(pageRequest), GoodsInfo.class, "goodsInfo");

        pageInfo = new PageInfo<>(totalCount, goodsInfoList);
        redisTemplate.opsForValue().set(key, pageInfo);

        return pageInfo;
    }

    /**
     * 根据商品类型查找商品
     *
     * @param category
     * @return
     */
    @Override
    public List<GoodsInfo> queryGoodsByCategory(String category) {

        //将该类别的所有商品缓存
        String key = "category_"+category;
        List<GoodsInfo> goodsInfos = null;
        redisTemplate1.delete(key);
        goodsInfos = redisTemplate1.opsForValue().get(category);
        if(goodsInfos != null){
            return goodsInfos;
        }

        Query query = new Query();
        //按类型查找并按提交时间降序排序
        query.addCriteria(Criteria.where("category").is(category).and("num").ne(0))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"));
        goodsInfos = mongoTemplate.find(query, GoodsInfo.class, "goodsInfo");
        //添加缓存
        if(goodsInfos.size() != 0){
            redisTemplate1.opsForValue().set(key, goodsInfos, 60, TimeUnit.MINUTES);
        }

        return goodsInfos;
    }

    /**
     * 根据商品名模糊查找对应商品
     *
     * @param goodsName
     * @param category
     * @return
     */
    @Override
    public List<GoodsInfo> queryGoodsByLike(String goodsName, String category) {

        //从缓存中查找
        String key = "category_"+ category;
        List<GoodsInfo> goodsInfos = redisTemplate1.opsForValue().get(key);
        List<GoodsInfo> list = new ArrayList<>();
        if(goodsInfos != null){
            for (GoodsInfo goodsInfo : goodsInfos) {
                if(goodsInfo.getGoodsName().contains(goodsName)){
                    list.add(goodsInfo);
                }
            }
            return list;
        }

        Query query = new Query();
        Pattern pattern = Pattern.compile("^.*" + goodsName + ".*$", Pattern.CASE_INSENSITIVE);
        query.addCriteria(Criteria.where("goodsName").regex(pattern).and("category").is(category).and("num").ne(0))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"));

        return mongoTemplate.find(query, GoodsInfo.class, "goodsInfo");
    }
}
