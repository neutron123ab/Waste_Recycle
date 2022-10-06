package com.neutron.waste_recycle_backend.service.impl;

import com.mongodb.client.result.UpdateResult;
import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.Order;
import com.neutron.waste_recycle_backend.entity.PageInfo;
import com.neutron.waste_recycle_backend.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Service
public class TradeServiceImpl implements TradeService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Resource
    private RedisTemplate<String, PageInfo<Order>> redisTemplate;

    @Resource(name = "goodsInfoRedisTemplate")
    private RedisTemplate<String, GoodsInfo> goodsInfoRedisTemplate;

    @Resource(name = "goodsInfoListRedisTemplate")
    private RedisTemplate<String, List<GoodsInfo>> goodsInfoListRedisTemplate;

    /**
     * 用户提交订单
     *
     * @param order
     * @return
     */
    @Override
    public String addOrder(Order order) {
        //清缓存
        String key = "order_" + order.getOpenid();
        redisTemplate.delete(key);

        String key1 = "goods_"+order.getGoodsId();
        goodsInfoListRedisTemplate.delete(key1);

        String key2 = "orderPage_*";
        Set<String> keys = redisTemplate.keys(key2);
        if(keys != null){
            redisTemplate.delete(keys);
        }

        //清空排行榜缓存
        goodsInfoListRedisTemplate.delete("rank");

        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = simpleDateFormat.format(date);
        order.setPurchaseTime(format);

        mongoTemplate.insert(order);

        return "insert success";
    }

    /**
     * 根据商品id修改商品剩余数量和售卖量
     *
     * @param id
     * @param purchaseNum
     * @return
     */
    @Override
    public Integer updateGoodsNum(String id, Integer purchaseNum) {

        String key = "goods_" + id;
        goodsInfoListRedisTemplate.delete(key);

        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        GoodsInfo goodsInfo = mongoTemplate.findOne(query, GoodsInfo.class, "goodsInfo");
        assert goodsInfo != null;
        Integer num = goodsInfo.getNum();
        Integer sailedNum = goodsInfo.getSailedNum();

        Update update = new Update();
        update.set("num", num - purchaseNum);
        update.set("sailedNum", sailedNum + purchaseNum);

//        GoodsInfo goodsInfoRedis = goodsInfoRedisTemplate.opsForValue().get(key);
//        if (goodsInfoRedis != null) {
//            goodsInfoRedis.setNum(num - purchaseNum);
//            goodsInfoRedis.setSailedNum(sailedNum + purchaseNum);
//            goodsInfoRedisTemplate.opsForValue().set(key, goodsInfoRedis, 60, TimeUnit.MINUTES);
//        }

        UpdateResult info = mongoTemplate.updateFirst(query, update, GoodsInfo.class, "goodsInfo");
        long modifiedCount = info.getModifiedCount();
        String s = String.valueOf(modifiedCount);

        return Integer.parseInt(s);
    }

    /**
     * 根据商品id查询商品余量
     *
     * @param id
     * @return
     */
    @Override
    public Integer getNewGoodsNum(String id) {

        String key = "goods_" + id;
        GoodsInfo goodsInfo = null;
        goodsInfo = goodsInfoRedisTemplate.opsForValue().get(key);
        String key2 = "category_*";
        Set<String> keys = goodsInfoListRedisTemplate.keys(key2);
        if(keys != null){
            goodsInfoListRedisTemplate.delete(keys);
        }

        if (goodsInfo != null) {
            return goodsInfo.getNum();
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        goodsInfo = mongoTemplate.findOne(query, GoodsInfo.class, "goodsInfo");

        if (goodsInfo != null) {
            goodsInfoRedisTemplate.opsForValue().set(key, goodsInfo, 60, TimeUnit.MINUTES);
        } else {
            return 0;
        }

        return goodsInfo.getNum();
    }

    /**
     * 分页查询用户订单
     *
     * @param openid
     * @param page
     * @param pageSize
     * @return
     */
    @Override
    public PageInfo<Order> queryGoodsUserPurchased(String openid, Integer page, Integer pageSize) {

        //取缓存
        String key = "orderPage_" + openid + "_" + page + "_" + pageSize;
        PageInfo<Order> orderPageInfo = redisTemplate.opsForValue().get(key);
        System.out.println(orderPageInfo);
        if(orderPageInfo != null){
            return orderPageInfo;
        }

        LookupOperation lookup = Aggregation.lookup("goodsInfo", "goodsId", "_id", "goodsInfo");
        Criteria criteria = Criteria.where("openid").is(openid);
        Sort sort = Sort.by(Sort.Direction.DESC, "purchaseTime");

        MatchOperation match = Aggregation.match(criteria);
        SortOperation sortOperation = Aggregation.sort(sort);
        Aggregation aggregation = Aggregation.newAggregation(lookup, match, sortOperation);

        int skip = (page - 1) * pageSize;

        aggregation.getPipeline().add(Aggregation.skip(skip));
        aggregation.getPipeline().add(Aggregation.limit(pageSize));

        AggregationResults<Order> order = mongoTemplate.aggregate(aggregation, "order", Order.class);
        List<Order> orders = order.getMappedResults();

        //总数
        Query query = new Query();
        query.addCriteria(Criteria.where("openid").is(openid));
        long count = mongoTemplate.count(query, "order");

        //缓存为空时设置缓存
        PageInfo<Order> info = new PageInfo<>(count, orders);
        redisTemplate.opsForValue().set(key, info, 60, TimeUnit.MINUTES);

        return info;
    }

    /**
     * 根据商品销量获得排行榜
     *
     * @return
     */
    @Override
    public List<GoodsInfo> getGoodsRankBySailedNum() {
        //取缓存
        String key = "rank";
        List<GoodsInfo> goodsInfos = goodsInfoListRedisTemplate.opsForValue().get(key);
        if(goodsInfos != null){
            return goodsInfos;
        }

        Query query = new Query();
        query.with(Sort.by(Sort.Direction.DESC, "sailedNum"))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"))
                .limit(4);

        //缓存为空时设置缓存
        List<GoodsInfo> infoList = mongoTemplate.find(query, GoodsInfo.class, "goodsInfo");
        goodsInfoListRedisTemplate.opsForValue().set(key, infoList, 120, TimeUnit.MINUTES);

        return infoList;
    }

}
