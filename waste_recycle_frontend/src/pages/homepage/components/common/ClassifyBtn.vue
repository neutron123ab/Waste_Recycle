<template>

  <view class="classifyBtn">
    <text class="classify">功能分类</text>
    <view class="line"></view>

    <view class="tabsBox">
      <van-tabs sticky color="#AEF516" class="classifyBtnContainer" line-width="100rpx">
        <van-tab title="站点查找">
          <site-search to="/siteSearch"></site-search>
        </van-tab>
<!--        <van-tab title="今日资讯">-->
<!--          <today-news to="/todayNews"></today-news>-->
<!--        </van-tab>-->
        <van-tab title="跳蚤市场">
          <flea-market to="/fleaMarket"></flea-market>
        </van-tab>
        <van-tab title="跳蚤平台">
          <plat-form to="/platform"></plat-form>
        </van-tab>
      </van-tabs>
    </view>

  </view>



</template>

<script setup>

import {ref} from "vue";
import SiteSearch from "../siteSearch/SiteSearch";
import TodayNews from "../todayNews/TodayNews";

const items = ref(['站点查找', '今日资讯', '跳蚤市场', '跳蚤平台'])

</script>

<style scoped>

.classifyBtn {
  display: flex;
  flex-direction: column;
  margin-top: 40rpx;
}

.classifyBtn .classify {
  position: relative;
  margin-top: 28rpx;
  margin-left: 7%;
  font-size: 35rpx;
  font-weight: bold;
  font-family: "黑体";
}

.classifyBtn .line {
  position: relative;
  margin-top: 2rpx;
  margin-left: 6%;
  width: 160rpx;
  height: 5rpx;
  border-radius: 50rpx;
  background-color: #AEF516;
}

.classifyBtn .tabsBox{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
}

.classifyBtn .tabsBox .classifyBtnContainer {
  height: 100rpx;
  width: 100%;
  box-shadow:0rpx 5rpx 12rpx 12rpx #f7f8fa;
  font-size: 30rpx;
  margin-top: 30rpx;
}


</style>