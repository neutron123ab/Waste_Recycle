<template>

  <view class="nearSiteInfo">
    <view class="headBox">
      <view class="titleBox">
        <text class="title">附近站点情况</text>
        <view class="line"></view>
      </view>
      <view class="moreBox">
        <view class="more">更多</view>
        <view class="iconfont icon-arrow-right"></view>
      </view>
    </view>

    <scroll-view class="nearSiteInfoBox" scroll-x="true" enable-flex="true" enhanced :show-scrollbar="false">
      <view class="infoBox" v-for="item in nearSiteInfo">
        <view class="info-container">
          <image class="infoImg" :src="item.image" mode="aspectFill"></image>
          <view class="starContainer">
            <view class="score">{{item.grade}}</view>
            <view class="star iconfont icon-star"></view>
            <view class="starNum">{{item.likeNum}}</view>
          </view>
          <view class="starBtn iconfont icon-love"></view>
          <view class="infoTitle">{{item.title}}</view>
          <view class="info">
            <view class="positionIcon iconfont icon-locate1e"></view>
            <view class="dist">{{item.distance}}</view>
            <view class="timeIcon iconfont icon-time"></view>
            <view class="timeInfo">{{item.time}}</view>
          </view>
          <view class="commentInfo">
            <view v-for="i in item.comment">
              <view class="cmt">{{i}}</view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>

</template>

<script setup>

import {reactive} from "vue";

const nearSiteInfo = reactive([
  {
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/image1.png",
    title: "“快易好”回收站",
    distance: "2.6km",
    time: "30分钟",
    comment: ["回收价高", "回收效率高", "支持上门", "回馈活动"],
    grade: "4.8",
    likeNum: "(999+)"
  },
  {
    image: "https://wasterecycle.xyz/images/waste_recycle/homepage/image2.png",
    title: "xxx回收站",
    distance: "2.6km",
    time: "30分钟",
    comment: ["回收价高", "回收效率高", "支持上门", "回馈活动"],
    grade: "4.8",
    likeNum: "(999+)"
  }
])

</script>

<style scoped>

.nearSiteInfo {
  display: flex;
  flex-direction: column;
  margin-top: 40rpx;
}

.nearSiteInfo .headBox {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  height: 100rpx;
}

.nearSiteInfo .headBox .titleBox{
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin-left: 6%;
  height: 100rpx;
}

.nearSiteInfo .headBox .titleBox .title {
  position: relative;
  margin-top: 28rpx;
  margin-left: 1%;
  font-size: 35rpx;
  font-weight: bold;
  font-family: "黑体";
}

.nearSiteInfo .headBox .titleBox .line {
  position: relative;
  margin-top: 2rpx;
  width: 213rpx;
  height: 5rpx;
  border-radius: 50rpx;
  background-color: #AEF516;
}

.nearSiteInfo .headBox .moreBox{
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

.nearSiteInfo .nearSiteInfoBox {
  white-space: nowrap;
  margin-top: 0rpx;
}

.info-container {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border-radius: 35rpx;
  width: 600rpx;
  height: 518rpx;
  /*background-color: #f7f7f7;*/
}

.infoImg {
  position: relative;
  border-top-left-radius: 35rpx;
  border-top-right-radius: 35rpx;
  width: 600rpx;
}

.starContainer {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  left: 34rpx;
  top: 32rpx;
  border-radius: 35rpx;
  width: 200rpx;
  height: 60rpx;
  background: rgba(255, 255, 255, 0.96);

}

.score {
  position: relative;
  font-size: 30rpx;
  font-weight: bold;
}

.star {
  position: relative;
  margin-left: 6rpx;
  color: #FF673D;
  font-size: 26rpx;
}

.starNum {
  position: relative;
  margin-left: 10rpx;
  font-size: 24rpx;
  color:rgba(27, 27, 33, 0.3);
}

.starBtn {
  position: absolute;
  right: 34rpx;
  top: 32rpx;
  color: #FF673D;
  font-size: 56rpx;
}

.infoTitle {
  position: relative;
  margin-top: 20rpx;
  margin-left: -300rpx;
  font-size: 35rpx;
  font-weight: bold;
  color: #000;
}

.info {
  position: relative;
  margin-left: 14rpx;
  margin-top: 14rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 490rpx;
  height: 35rpx;
}

.positionIcon {
  position: relative;
  margin-left: 0rpx;
  font-size: 37rpx;
  font-weight: bold;
  color: #FF673D;
}

.dist {
  position: relative;
  margin-left: 5rpx;
  font-size: 30rpx;
  color: #707070;
}

.timeIcon {
  position: relative;
  margin-left: 100rpx;
  font-size: 33rpx;
  color: #FF673D;
  font-weight: bold;
}

.timeInfo {
  position: relative;
  margin-left: 5rpx;
  font-size: 30rpx;
  color: #707070;
}

.commentInfo {
  /*position: relative;*/
  display: flex;
  flex-direction: row;
  width: 580rpx;
  height: 40rpx;
  margin-top: 10rpx;
  margin-left: -10rpx;
  margin-bottom: 30rpx;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.cmt {
  position: relative;
  margin-left: 10rpx;
  width: 114rpx;
  height: 40rpx;
  border-radius: 10rpx;
  line-height: 40rpx;
  background-color: rgba(255, 103, 61, 0.1);
  font-size: 23rpx;
  color: #474747;
}

.infoBox {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin: 14rpx 20rpx 20rpx;
  border-radius: 35rpx;
  width: 600rpx;
  height: 518rpx;
  background-color: #ffffff;
  box-shadow:0rpx 5rpx 12rpx 12rpx #f7f8fa;
}

</style>