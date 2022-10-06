<template>

  <view class="down">
    <view class="headBox">
      <view class="title-container">
        <text class="title">今日看点</text>
        <view class="line"></view>
      </view>
    </view>

    <view class="newsContainer" v-for="item in downInfo" @tap="jumpNews(item.jump)">
      <view class="newsImg-container">
        <image class="newsImg" :src="item.image" mode="widthFix"></image>
      </view>
      <view class="content-container">
        <view class="newsTitle">{{item.title}}</view>
        <text class="newsContent">{{item.content}}</text>
        <view class="newsInfo">
          <view class="newsFrom">{{item.from}}</view>
          <view class="newsTime">{{item.time}}</view>
        </view>
      </view>
    </view>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
  </view>

</template>

<script setup>

import {reactive} from "vue";

const downInfo = reactive([
  {
    id: 0,
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/44.png",
    title: "# 5G时代",
    content: "在2021年中国国际服务贸易交易会全球服务贸易峰会上的致辞",
    from: "即时通讯",
    time: "50分钟前",
    jump: "/pages/news/News1"
  },
  {
    id: 1,
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/nav5.png",
    title: "# 共同富裕",
    content: "习近平在金砖国家领导人第十三次会晤上的讲话",
    from: "即时通讯",
    time: "50分钟前",
    jump: "/pages/news/News2"
  }
])

function jumpNews(jumpUrl){
  uni.navigateTo({
    url: jumpUrl
  })
}

</script>

<style scoped>

.down {
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
}

.headBox {
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

.newsContainer {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 52rpx;
  margin-top: 20rpx;
  width: 654rpx;
  height: 200rpx;
  box-shadow:0rpx 5rpx 12rpx 12rpx #f7f8fa;
}

.newsImg-container {
  position: relative;
  width: 144rpx;
  height: 144rpx;
  margin-left: 20rpx;
}

.newsImg {
  position: relative;
  width: 144rpx;
  left: 0;
  top: 0;
}

.content-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 25rpx;
  line-height: 45rpx;
}

.newsTitle {
  position: relative;
  display: flex;
  /*margin-left: -340rpx;*/
  font-family: "黑体";
  font-size: 26rpx;
  color: #8894A2;
}

.newsContent {
  text-indent: 2;
  display: flex;
  font-family: "黑体";
  font-size: 30rpx;
  text-align: left;
  color: #26262E;
}

.newsInfo {
  position: relative;
  display: flex;
  flex-direction: row;
}

.newsFrom {
  position: relative;
  font-family: "黑体";
  font-size: 26rpx;
  color: #8894A2;
}

.newsTime {
  position: relative;
  margin-left: 30rpx;
  font-family: "黑体";
  font-size: 26rpx;
  color: #8894A2;
}

.bottomImg {
  position: relative;
  height: 210rpx;
  margin: 70rpx 40rpx 190rpx;
}

</style>