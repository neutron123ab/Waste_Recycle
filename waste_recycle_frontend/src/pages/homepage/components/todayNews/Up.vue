<template>

  <view class="up">
    <view class="headBox">
      <view class="title-container">
          <text class="title">即时资讯</text>
          <view class="line"></view>
      </view>
    </view>

    <scroll-view class="upInfoBox" scroll-x="true" enable-flex="true" enhanced :show-scrollbar="false">
      <view class="infoBox1" v-for="item in upInfo">
        <view class="sel2nav-container">
          <image class="img1" :src="item.bigImage" mode="widthFix"></image>
          <view class="info-container1">
            <view class="img2-container">
              <image class="img2" :src="item.smallImage" mode="widthFix"></image>
            </view>
            <view class="info1">
              <view class="navTitle">{{item.title}}</view>
              <view class="time1">{{item.time}}</view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>


  </view>

</template>

<script setup>

import {reactive} from "vue";

const upInfo = reactive([
  {
    bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/1.png",
    smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/11.png",
    title: "即时通讯",
    time: "5分钟前"
  },
  {
    bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/2.png",
    smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/22.png",
    title: "即时通讯",
    time: "15分钟前"
  },
  {
    bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/3.png",
    smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/33.png",
    title: "即时通讯",
    time: "5分钟前"
  }
])

</script>

<style scoped>

.up {
  display: flex;
  flex-direction: column;
  margin-top: 40rpx;
}

.up .headBox {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  height: 100rpx;
}

.title-container {
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin-left: 6%;
  height: 100rpx;
}

.title {
  position: relative;
  margin-top: 28rpx;
  margin-left: 1%;
  font-size: 35rpx;
  font-weight: bold;
  font-family: "黑体";
}

.line {
  position: relative;
  margin-top: 2rpx;
  width: 150rpx;
  height: 5rpx;
  border-radius: 50rpx;
  background-color: #AEF516;
}

.infoBox1 {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin: 14rpx 20rpx 20rpx;
  border-radius: 50rpx;
  width: 251rpx;
  height: 274rpx;
  background-color: #ffffff;
  box-shadow:0rpx 5rpx 12rpx 12rpx #f7f8fa;
}

.upInfoBox {
  white-space: nowrap;
  margin-top: 0rpx;
}

.sel2nav-container {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin-right: 15rpx;
  width: 255rpx;
  height: 274rpx;
}

.img1 {
  position: absolute;
  border-radius: 50rpx;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 256rpx;
}

.info-container1 {
  display: flex;
  flex-direction: row;
  margin-top: 190rpx;
  width: 266rpx;
  height: 70rpx;

  align-items: center;
}

.img2-container {
  position: relative;
  margin-left: 20rpx;
  width: 70rpx;
  height: 60rpx;
}

.img2 {
  position: relative;
  top: 0;
  right: 0;
  width: 70rpx;
}

.info1 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96rpx;
  height: 52rpx;
  margin-left: 20rpx;
}

.navTitle {
  position: relative;
  font-size: 24rpx;
  font-weight: bold;
  color: #FFFFFF;
  font-family: "黑体";
}

.time1 {
  position: relative;
  font-size: 20rpx;
  font-family: "黑体";
  color: #cecece;
}

</style>