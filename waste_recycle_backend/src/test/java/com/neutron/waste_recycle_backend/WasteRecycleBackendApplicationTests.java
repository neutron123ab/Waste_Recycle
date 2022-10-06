package com.neutron.waste_recycle_backend;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import com.neutron.waste_recycle_backend.entity.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.List;

@SpringBootTest
class WasteRecycleBackendApplicationTests {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RedisTemplate<String, String> redisTemplate;


    @Test
    public void test1(){
        redisTemplate.opsForValue().set("city", "beijing");
    }

    @Test
    public void test2(){
        HashOperations<String, Object, Object> hashOperations = redisTemplate.opsForHash();
        hashOperations.put("001", "name","neutron");
        hashOperations.put("001", "age", "11");
    }

    @Test
    void contextLoads() {
        Query query = new Query();
        query.addCriteria(Criteria.where("openid").is("oFcfi5Y6m0oy65vhiE8Gsg_CRWEY"))
                .with(Sort.by(Sort.Direction.DESC, "uploadTime"));

        List<GoodsInfo> goodsInfo = mongoTemplate.find(query, GoodsInfo.class, "goodsInfo");

        for (GoodsInfo info : goodsInfo) {
            System.out.println(info.toString());
        }
    }

    @Test
    public void testAggregation(){
//        LookupOperation lookup = LookupOperation.newLookup()
//                .from("goodsInfo")
//                .localField("goodsId")
//                .foreignField("_id")
//                .as("goodsInfo");
        LookupOperation lookup = Aggregation.lookup("goodsInfo", "goodsId", "_id", "goodsInfo");

        Criteria criteria = Criteria.where("goodsName").is("2");
//        MatchOperation match = Aggregation.match(criteria);
        MatchOperation match = Aggregation.match(criteria);
        Aggregation aggregation = Aggregation.newAggregation(lookup, match);
        AggregationResults<Order> order = mongoTemplate.aggregate(aggregation, "order", Order.class);

        System.out.println(order.getMappedResults());
    }

}
