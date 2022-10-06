<template>

  <van-nav-bar title="我的订单"/>

  <view class="orderList">
    <van-empty
        v-if="items.length === 0"
        class="custom-image"
        image="../../../static/no.png"
        description="空空如也~"
    />


    <view v-if="items.length !== 0">
      <view v-for="item in items" class="van-card-full">
        <van-card
            :num="item.num"
            :price="item.price"
            :title="item.goodsName"
            :thumb="picture(item.goodsInfo.pictureId)"
            thumb-mode="cover"
        >
          <template #desc>
            <view>简介：{{introduce(item.goodsInfo.introduce)}}</view><br>
            <view>类别：{{item.goodsInfo.category}}</view><br>
            <view>购买时间：{{item.purchaseTime}}</view><br>
          </template>
        </van-card>
      </view>

    </view>

    <uni-pagination
        v-if="items.length !== 0"
        class="icon"
        showIcon="true"
        :total="pagination.total"
        :current="pagination.current"
        :pageSize="pagination.pageSize"
        @change="change"
        title="标题" />

  </view>


</template>

<script setup>

import {onBeforeMount, reactive} from "vue";
import commonConfig from "../../wxcomponents/config/commonConfig";

const items = reactive([])
const pagination = reactive({
  current: 1,
  total: 0,
  pageSize: 5
})

onBeforeMount(initData)

function initData(){
  let openid = uni.getStorageSync("openid")
  uni.request({
    method: "GET",
    url: "/order",
    data: {
      openid,
      page: pagination.current,
      pageSize: pagination.pageSize
    },
    success:function (res){
      let length = items.length
      for (let i = 0; i <= length; i++) {
        items.pop();
      }
      items.pop();
      for (let i = 0; i < res.data.records.length; i++) {
        items.push(res.data.records[i])
      }
      pagination.total = res.data.total
    }
  })
}

function change(e){
  let openid = uni.getStorageSync("openid");
  pagination.current = e.current;
  uni.request({
    method: "GET",
    url: "/order",
    data: {
      openid,
      page: pagination.current,
      pageSize: pagination.pageSize
    },
    success:function (res){
      if(res.data.records.length !== 0){
        console.log(res.data,res.data,res.data)
        for (let i = 0; i <= items.length; i++) {
          items.pop();
        }
        items.pop();
        for (let i = 0; i < res.data.records.length; i++){
          items.push(res.data.records[i]);
        }
        pagination.total = res.data.total;
      }
    }
  })
}

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

function introduce(desc){
  let tmp = desc.toString()
  if(tmp.length > 10){
    return tmp.slice(0,9)+"..."
  }
  return desc
}

</script>

<style scoped>

.van-card-full{
  margin: 15rpx auto;
  width: 90%;
  box-shadow: 0 5rpx 10rpx #FAFAFA;
}

.icon {
  width: 70%;
  position: absolute;
  bottom: 220rpx;
  left: 0;
  right: 0;
  margin: 0 auto;
}

</style>