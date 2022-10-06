package com.neutron.waste_recycle_backend.service.impl;

import com.neutron.waste_recycle_backend.controller.GoodsController;
import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.service.QueryUserSailedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class QueryUserSailedServiceImpl implements QueryUserSailedService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Resource
    private RedisTemplate<String, List<GoodsInfo>> redisTemplate;

    /**
     * 根据用户id查询该用户售卖的商品，并按售卖时间降序排序，最近卖的先显示
     * @param openid 用户id
     * @return 商品列表
     */
    @Override
    public List<GoodsInfo> getGoodsUserSailedAscByTime(String openid) {

        List<GoodsInfo> goodsInfos = null;
        goodsInfos = (List<GoodsInfo>) redisTemplate.opsForValue().get(openid);
        if(goodsInfos != null){
            return goodsInfos;
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("openid").is(openid))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"));
        goodsInfos = mongoTemplate.find(query, GoodsInfo.class, "goodsInfo");

        redisTemplate.opsForValue().set(openid, goodsInfos, 60, TimeUnit.MINUTES);

        return goodsInfos;
    }
}
