<template>

  <van-notify id="van-notify" />

  <van-sticky>
    <van-nav-bar
        :title="data[0].goodsName"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
  </van-sticky>

  <view class="img">
    <van-image
        width="100vw"
        height="55vh"
        fit="contain"
        :src="picture(data[0].pictureId)"
    />
  </view>



  <view class="info">
    <van-cell-group inset>
      <van-cell title="商品名" :value="data[0].goodsName" />
      <van-cell title="商品介绍" :value="data[0].introduce"/>
      <van-cell title="单价" :value="data[0].price + ' 元'"/>
      <van-cell title="剩余数量" :value="data[0].num"/>
      <van-cell title="评分">
        <van-rate
            value="2.5"
            allow-half
            void-icon="star"
            void-color="#eee"
            @change="onChange"
        />
      </van-cell>

    </van-cell-group>
  </view>


  <view class="a"></view>

  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服"/>
    <van-goods-action-icon icon="cart-o" text="购物车"/>
    <van-goods-action-icon icon="shop-o" text="店铺"/>
    <van-goods-action-button text="加入购物车" type="warning"/>
    <van-goods-action-button text="立即购买" @tap="onBuy"/>
  </van-goods-action>

  <van-popup :show="popup.show" position="bottom" closeable round @close="onClose">
    <view class="group">
      <van-cell title="请选择购买购买数量">
          <van-stepper :value="data.num" :max="data[0].num" @change="onChangeNum"/>
      </van-cell>
      <van-cell
          :label="popup.addressName"
          title="收货地址"
      >
        <van-button size="small" type="primary" @tap="chooseLocation">
          获取地址
        </van-button>
      </van-cell>

      <van-field
          label="收货人"
          :value="popup.userName"
          placeholder="请输入收货人昵称或姓名"
          @change="onChangeUsername"
      />

      <van-field
          label="联系方式"
          :value="popup.phoneNumber"
          placeholder="请输入收货人手机号码"
          @change="onChangePhoneNumber"
      />
      <view class="btn">
        <van-goods-action-button text="加入购物车" type="warning"/>
        <van-goods-action-button text="立即购买" @tap="onBuyNow"/>
      </view>
    </view>
  </van-popup>

</template>

<script setup>

import {onLoad} from "@dcloudio/uni-app";
import {onBeforeMount, reactive, ref} from "vue";
import commonConfig from "../../wxcomponents/config/commonConfig";
import store from "../store";

onBeforeMount(initNum)

const data = reactive([])
const popup = reactive({
  show: false,
  num: 1,
  address: '',
  addressName: '请选择地址',
  userName: '',
  phoneNumber: ''
})

onLoad((option)=>{
  const item = JSON.parse(decodeURIComponent(option.item));
  data.push(item);
})

function initNum(){
  uni.request({
    method: "GET",
    url: "/order/num?id="+data[0].id,
    success:function (res){
      store.commit('goodsNumChange', res.data)
    }
  })
}

function chooseLocation(){
  uni.chooseLocation({
    success:function (res){
      popup.address = res.address;
      popup.addressName = res.name
    }
  })
}

function onChangeUsername(event){
  popup.userName = event.detail
}

function onChangePhoneNumber(event){
  popup.phoneNumber = event.detail
}

function onClose(){
  popup.show = false;
}

function onChangeNum(event) {
  popup.num = event.detail
}

function onBuy(){
  popup.show = true;
}

function onBuyNow(){
  //提交订单
  if(popup.userName.length !== 0 && popup.phoneNumber.length !== 0 &&
      popup.addressName.length !== 0){
    if(popup.num > data[0].num){
      uni.showToast({
        title: "数量超过限制",
        icon: "error"
      })
    } else {
      let openid = uni.getStorageSync("openid");
      uni.request({
        method: "POST",
        url: "/order",
        data: {
          goodsId: data[0].id,
          goodsName: data[0].goodsName,
          openid,
          userName: popup.userName,
          phoneNumber: popup.phoneNumber,
          address: popup.address,
          addressName: popup.addressName,
          price: data[0].price,
          num: popup.num,
        },
        success:function (res){
          console.log(res.data)
          //提交成功就修改商品数量
          uni.request({
            method: "PUT",
            url: "/order",
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              id: data[0].id,
              purchaseNum: popup.num
            },
            success:function (res1){
              if(res1.data !== 0){
                uni.showToast({
                  title: "购买成功",
                  icon: "success"
                })
              } else {
                uni.showToast({
                  title: "购买失败",
                  icon: "error"
                })
              }
              uni.request({
                method: "GET",
                url: "/order/num?id="+data[0].id,
                success:function (res2){
                  data[0].num = res2.data;
                  console.log("+++++")
                  console.log(store.state.num, res2.data)
                  store.commit('goodsNumChange', res2.data)
                  console.log(store.state.num)
                  console.log("++++++")
                }
              })
              popup.show=false;
            }
          })
        }
      })
    }

  } else {
    uni.showToast({
      title: "请完善信息",
      icon: "error"
    })
  }

}

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

function onClickLeft(){
  uni.navigateBack({
    delta: 1
  })
}

</script>

<style>

page{
  background-color: #f7f8fa;
}

.img {
  background-color: black;
}

.a {
  height: 13vh;
}

.info {
  margin-top: 15rpx;
}

.group {
  width: 80%;
  margin-top: 100rpx;
  margin-bottom: 160rpx;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: flex;
  flex-direction: row;
  margin-top: 80rpx;
}

</style>