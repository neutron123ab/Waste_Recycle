package com.neutron.waste_recycle_backend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neutron.waste_recycle_backend.entity.Openid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

@RestController
public class WeixinLoginController {

    @GetMapping("/login")
    public Map<String, String> getOpenid(String code) throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();

        Map<String, String> map = new HashMap<>();

        if(code == null || code.length()==0){
            map.put("status", "0");
            map.put("msg", "code不能为空");
            return map;
        }

        String appid = "wx8040bfe91efdbbae";
        String secret = "d47ed8078d15da72a648c9190daa3433";
        String grant_type = "grant_type=authorization_code";

        String params = "appid=" + appid
                + "&secret=" + secret
                + "&js_code=" + code
                + "&grant_type=" + grant_type;

        Mono<String> resp = WebClient.create()
                .get()
                .uri("https://api.weixin.qq.com/sns/jscode2session?" + params)
                .retrieve()
                .bodyToMono(String.class);

        Openid openid = objectMapper.readValue(resp.block(), Openid.class);

        map.put("openid", openid.getOpenid());


        return map;
    }


}
