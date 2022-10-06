package com.neutron.waste_recycle_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Data
@Repository
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "goodsInfo")
public class GoodsInfo implements Serializable {

    @Id
    private String id;          //商品id
    private String goodsName;   //商品名
    private String price;       //价格
    private Integer num;        //数量
    private String category;    //商品类型
    private String pictureId;   //图片存入GRIDfs中生成的id
    private String address;     //详细地址
    private String addressName; //地址名
    private String introduce;   //商品简介
    private String userName;    //出售商品的用户名
    private String openid;      //用户唯一标识
    private String uploadTime;  //提交时间
    private Integer sailedNum;   //售卖量
}
