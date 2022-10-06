<template>

  <view class="recommendSite">
    <view class="headBox">
      <view class="titleBox">
        <text class="title">为您优选</text>
        <view class="line"></view>
      </view>
      <view class="moreBox">
        <view>更多</view>
        <view class="iconfont icon-arrow-right"></view>
      </view>
    </view>

    <view class="recSiteBox">
      <view v-for="item in recData">
        <view class="rec-container">
          <image class="recImg" :src="item.image" mode="aspectFill"></image>
          <view class="recStarContainer">
            <view class="recScore">{{item.grade}}</view>
            <view class="recStar iconfont icon-star"></view>
          </view>
          <view class="recStarBtn iconfont icon-love"></view>
          <view class="recTitle">{{item.title}}</view>
          <view class="recContent">{{item.comment}}</view>
        </view>
      </view>
    </view>

    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
  </view>

</template>

<script setup>

import {reactive} from "vue";

const recData = reactive([
  {
    grade: "4.8",
    title: "tang臣二品",
    comment: "附近交易人数最多",
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang2.png"
  },
  {
    grade: "4.9",
    title: "tang臣三品",
    comment: "附近回选率最高",
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang3.png"
  },
  {
    grade: "4.8",
    title: "tang臣四品",
    comment: "评价较好，距离较远",
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang4.png"
  }
])

</script>

<style scoped>
.recommendSite {
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
}

.recommendSite .headBox {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;

  height: 100rpx;
}

.recommendSite .headBox .titleBox{
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin-left: 6%;
  height: 100rpx;
}

.recommendSite .headBox .titleBox .title {
  position: relative;
  margin-top: 28rpx;
  margin-left: 1%;
  font-size: 35rpx;
  font-weight: bold;
  font-family: "黑体";
}

.recommendSite .headBox .titleBox .line {
  position: relative;
  margin-top: 2rpx;
  width: 143rpx;
  height: 5rpx;
  border-radius: 50rpx;
  background-color: #AEF516;
}

.recommendSite .headBox .moreBox {
  position: absolute;
  right: 15rpx;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  font-size: 27rpx;
  color: #1B1B21;
}

.recommendSite .recSiteBox {
  display: flex;
  flex-direction: row;
  margin-top: 0rpx;
}

.rec-container {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin-top: 14rpx;
  margin-left: 37rpx;
  border-radius: 15rpx;
  width: 200rpx;
  height: 180rpx;
  background-color: #f7f7f7;
}

.recImg {
  position: relative;
  border-top-left-radius: 15rpx;
  border-top-right-radius: 15rpx;
  width: 200rpx;
}

.recStarContainer {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  left: 14rpx;
  top: 14rpx;
  border-radius: 25rpx;
  width: 80rpx;
  height: 42rpx;
  background: rgba(255, 255, 255, 0.96);
}

.recScore {
  position: relative;
  font-size: 23rpx;
  font-weight: bold;
}

.recStar {
  position: relative;
  margin-left: 6rpx;
  color: #FF673D;
  font-size: 20rpx;
}

.recStarBtn {
  position: absolute;
  right: 14rpx;
  top: 14rpx;
  color: #FF673D;
  font-size: 42rpx;
}

.recTitle {
  position: relative;
  margin-top: 10rpx;
  margin-left: 10rpx;
  font-size: 20rpx;
  font-weight: bold;
  color: #000;
}

.recContent {
  position: relative;
  margin-top: 5rpx;
  margin-bottom: 6rpx;
  margin-left: 10rpx;
  font-size: 20rpx;
  color: #FF673D;
}

.bottomImg {
  position: relative;
  height: 210rpx;
  margin: 70rpx 40rpx 190rpx;
}

</style>