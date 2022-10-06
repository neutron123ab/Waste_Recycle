package com.neutron.waste_recycle_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "order")
public class Order implements Serializable {

    @Id
    private String id;
    private ObjectId goodsId;   //商品id
    private String goodsName;   //商品名
    private String openid;      //提交订单的用户id
    private String userName;    //收货人
    private String phoneNumber; //联系方式
    private String address;     //详细地址
    private String addressName; //地址名
    private String price;       //商品单价
    private Integer num;        //购买数量
    private String purchaseTime;//购买时间

    private GoodsInfo goodsInfo;
}
