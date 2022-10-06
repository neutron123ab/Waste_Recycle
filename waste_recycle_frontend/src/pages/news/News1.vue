<template>
  <van-nav-bar
      title="今日看点"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />


  <view class="news1-container">
    <view class="img-container">
      <image class="bigImg" :src="newsData.bigImage" mode="widthFix"></image>
    </view>

    <scroll-view scroll-y="true" style="position: absolute; top: 300rpx; left: 0; right: 0; bottom: 0;">
      <view class="info-container">
        <view class="info">
          <view class="from">{{newsData.from}}</view>
          <view class="time">{{newsData.time}}</view>
        </view>
        <view class="title">{{newsData.title}}</view>
      </view>

      <view class="text-container">
        <scroll-view scroll-y="true">
          <view class="text-box">
            <view class="headIcon">
              <view class="icon-from">
                <image class="img-from" :src="newsData.smallImage"></image>
                <view class="word">{{newsData.from}}</view>
              </view>
              <view class="icontime">
                <view class="time-Icon iconfont icon-time"></view>
                <view class="word">{{newsData.time}}</view>
              </view>
              <view class="read">
                <view class="readIcon iconfont icon-eye"></view>
                <view class="word">{{newsData.readNum}}</view>
              </view>
            </view>

            <view class="text-title">{{newsData.head}}</view>
            <view class="wel">{{newsData.welcome}}</view>

            <view v-for="item in newsData.content">
              <p class="p">{{item}}</p>
            </view>
          </view>
        </scroll-view>
      </view>
    </scroll-view>
  </view>



</template>

<script setup>

import {reactive} from "vue";

function onClickLeft(){
  uni.navigateBack({
    delta: 1
  })
}

const newsData = reactive({
  bigImage: "https://wasterecycle.xyz/images/waste_recycle/news1/news1.png",
  smallImage: "https://wasterecycle.xyz/images/waste_recycle/news1/news1_icon1.png",
  from: "即时通讯",
  time: "50分钟前",
  readNum: "999人阅读",
  title: "在2021年中国国际服务贸易交易会全球服务贸易峰会上的致辞",
  head: "9月2日晚，国家主席习近平在2021年中国国际服务贸易交易会全球服务贸易峰会上发表视频致辞",
  welcome: "尊敬的各位来宾，女士们，先生们，朋友们：",
  content: [
    "大家好！我谨代表中国政府和中国人民，并以我个人名义，向参加2021年中国国际服务贸易交易会的所有嘉宾，表示热烈的欢迎和诚挚的问候！",
    "本届服贸会以“数字开启未来，服务促进发展”为主题，相信在各方积极参与下，将成为一届特色鲜明、富有成效的盛会。",
    "服务贸易是国际贸易的重要组成部分和国际经贸合作的重要领域，在构建新发展格局中具有重要作用。我们愿同各方一道，坚持开放合作、互利共赢，共享服务贸易发展机遇，共促世界世界经济复苏和增长。",
    "我们将提高开放水平，在全国推进实施跨境服务贸易负面清单，探索建设国家服务贸易创新发展示范区；我们将扩大合作空间，加大对共建“一带一路”国家服务业发展的支持，同世界共享中国技术发展成果；我们将加强服务领域规则建设，支持北京等地开展国际高水平自由贸易协定规则对接先行先试，打造数字贸易示范区；我们将继续支持中小企业创新发展，深化新三板改革，设立北京证券交易所，打造服务创新型中小企业主阵地。",
    "女士们、先生们、朋友们！",
    "让我们携手抗疫、共克时艰，坚持用和平、发展、合作、共赢的“金钥匙”，破解当前世界经济、国际贸易和投资面临的问题，共创更加美好的未来！",
    "谢谢大家。",
  ],
  showModal: false,
  fontSize: 26,
  lineHeight: 40,
  selectColorIndex: 1,
  selectWeightIndex: 1,
  backgroundColor: '#FFFFFF',
  fontColor: '#26262E',
  fontWeight: 'normal'
})

</script>

<style scoped>

.news1-container {
  display: flex;
  flex-direction: column;
}

.img-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1126rpx;
}

.bigImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

::-webkit-scrollbar {
  width:0;
  height:0;
  color:transparent;
  display:none;
}

.info-container {
  position: relative;
  margin-top: 430rpx;
  margin-left: 48rpx;
  width: 654rpx;
  display: flex;
  flex-direction: column;
}

.info {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.from {
  position: relative;
  font-family: "黑体";
  font-size: 24rpx;
  color: #d6dbde;
}

.time {
  position: relative;
  margin-left: 20rpx;
  font-family: "黑体";
  font-size: 24rpx;
  color: #d6dbde;
}

.title {
  position: relative;
  margin-top: 15rpx;
  font-family: "黑体";
  font-size: 32rpx;
  font-weight: bold;
  color: #FFFFFF;
}

.text-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
  border-top-left-radius: 35rpx;
  border-top-right-radius: 35rpx;
  background-color: #fff;
  height: 990rpx;
  align-items: center;
  z-index: 10;
}

.headIcon {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  margin-top: 50rpx;
  width: 660rpx;
  height: 113rpx;
}

.icon-from {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 208rpx;
  height: 113rpx;
  background-color: #F6F2FF;
  align-items: center;
  justify-content: center;
  border-radius: 20rpx;
}

.img-from {
  position: relative;
  width: 58rpx;
  height: 78rpx;
}

.word {
  position: relative;
  margin-left: 15rpx;
  font-family: "黑体";
  font-size: 26rpx;
  color: #504f58;
}

.icontime {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 208rpx;
  height: 113rpx;
  background-color: #F6F2FF;
  align-items: center;
  justify-content: center;
  border-radius: 20rpx;
}

.time-Icon {
  position: relative;
  font-size: 44rpx;
  color: #8352ff;
}

.read{
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: 0;
  width: 208rpx;
  height: 113rpx;
  background-color: #F6F2FF;
  align-items: center;
  justify-content: center;
  border-radius: 20rpx;
}

.readIcon {
  position: relative;
  font-size: 44rpx;
  color: #8352ff;
}

.text-title {
  position: relative;
  margin-top: 45rpx;
  width: 654rpx;
  font-family: "黑体";
  font-size: 28rpx;
  line-height: 40rpx;
  font-weight: bold;
  color: #26262E;
}

.wel {
  position: relative;
  margin-top: 70rpx;
  width: 654rpx;
  color: #57575e;
  font-size: 26rpx;
  font-family: "黑体";
  line-height: 44rpx;
}

.p {
  position: relative;
  text-indent: 2em;
  width: 654rpx;
  color: #57575e;
  font-size: 26rpx;
  font-family: "黑体";
  line-height: 44rpx;
}

.text-box {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
  border-top-left-radius: 35rpx;
  border-top-right-radius: 35rpx;
  background-color: #fff;
  margin-left: 35rpx;
  margin-right: 35rpx;
  height: 990rpx;
  align-items: center;
  z-index: 10;
}

</style>