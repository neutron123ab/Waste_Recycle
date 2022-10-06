package com.neutron.waste_recycle_backend.config;

import com.neutron.waste_recycle_backend.entity.GoodsInfo;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.util.List;

@Configuration
public class RedisConfig extends CachingConfigurerSupport {

    //自定义redisTemplate的连接配置
    @Bean("redisConnection")
    public LettuceConnectionFactory redisConnection() {
        RedisStandaloneConfiguration server = new RedisStandaloneConfiguration();
        server.setHostName("121.4.139.32");
        server.setDatabase(0); // 指定数据库
        server.setPort(6379);
        return new LettuceConnectionFactory(server);
    }

    @Bean
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory connectionFactory){
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<>();

        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());

        redisTemplate.setConnectionFactory(connectionFactory);

        return redisTemplate;
    }

    @Bean("goodsInfoListRedisTemplate")
    public RedisTemplate<String, List<GoodsInfo>> goodsInfoListRedisTemplate(){
        RedisTemplate<String, List<GoodsInfo>> template = new RedisTemplate<>();
        template.setConnectionFactory(redisConnection());

        return template;
    }

    //k-商品id，v-商品信息
    @Bean("goodsInfoRedisTemplate")
    public RedisTemplate<String, GoodsInfo> goodsInfoRedisTemplate(){
        RedisTemplate<String, GoodsInfo> template = new RedisTemplate<>();
        template.setConnectionFactory(redisConnection());

        return template;
    }
}
