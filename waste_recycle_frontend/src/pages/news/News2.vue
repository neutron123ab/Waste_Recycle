<template>

  <page-meta
      root-background-color="{{newsData.backgroundColor}}"
      page-style="color: {{newsData.fontColor}}; font-weight: {{newsData.fontWeight}}"
      root-font-size="{{newsData.fontWeight}}"
  >
  </page-meta>

  <van-nav-bar
      title="今日看点"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />


  <view class="news-container">
    <view class="title">{{newsData.title}}</view>
    <view class="sTitle">
      <view class="sour">即时通讯</view>
      <view class="time">50分钟前</view>
    </view>
    <view class="img-container">
      <image :src="newsData.image" class="img" mode="aspectFill"></image>
    </view>
    <view class="summary">{{newsData.summary}}</view>
    <view class="content-style">
      <p class="pHead" :style="{fontSize: newsData.fontSize + 'rpx', lineHeight: newsData.lineHeight*1.5+'rpx'}">各位同事：</p>
      <view v-for="item in newsData.content">
        <p class="p" :style="{fontSize: newsData.fontSize + 'rpx', lineHeight: newsData.lineHeight*1.5+'rpx'}">
          {{item}}
        </p>
      </view>
    </view>

  </view>

  <view class="review">
    <input type="text" class="input" placeholder="写评论···"/>
    <view class="icon-container">
      <view class="comment icon iconfont icon-talk"></view>
      <view class="like icon iconfont icon-heart"></view>
      <view class="set icon iconfont icon-icon_function_xiazaifujian" @tap="pop"></view>

      <van-action-sheet :show="newsData.showModal" @close="onClose" title="调整字体大小和背景颜色">

<!--        <view class="function" v-if="newsData.showModal">-->
          <view class="color-style">
            <view class="white" @tap="selectColor1">
              <view class="white-img" v-if="newsData.selectColorIndex === 1" style="border: 2px solid#26262E;">Aa</view>
              <view class="white-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectColorIndex === 1" style="color: #26262E;">白色底</view>
              <view class="text" v-else>白色底</view>
            </view>
            <view class="warm" @tap="selectColor2">
              <view class="warm-img" v-if="newsData.selectColorIndex === 2" style="border: 2px solid#26262E;">Aa</view>
              <view class="warm-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectColorIndex === 2" style="color: #26262E;">暖色底</view>
              <view class="text" v-else>暖色底</view>
            </view>
            <view class="black" @tap="selectColor3">
              <view class="black-img" v-if="newsData.selectColorIndex === 3" style="border: 2px solid#26262E;">Aa</view>
              <view class="black-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectColorIndex === 3" style="color: #26262E;">深色底</view>
              <view class="text" v-else>深色底</view>
            </view>
          </view>

          <view class="weight-style">
            <view class="normal" @tap="selectWeight1">
              <view class="normal-img" v-if="newsData.selectWeightIndex === 1" style="border: 2px solid#26262E;">Aa</view>
              <view class="normal-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectWeightIndex === 1" style="color: #26262E;">常规</view>
              <view class="text" v-else>常规</view>
            </view>
            <view class="bold" @tap="selectWeight2">
              <view class="bold-img" v-if="newsData.selectWeightIndex === 2" style="border: 2px solid#26262E;">Aa</view>
              <view class="bold-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectWeightIndex === 2" style="color: #26262E;">粗体</view>
              <view class="text" v-else>粗体</view>
            </view>
            <view class="bolder" @tap="selectWeight3">
              <view class="bolder-img" v-if="newsData.selectWeightIndex === 3" style="border: 2px solid#26262E;">Aa</view>
              <view class="bolder-img" v-else>Aa</view>
              <view class="text" v-if="newsData.selectWeightIndex === 3" style="color: #26262E;">特粗</view>
              <view class="text" v-else>特粗</view>
            </view>
          </view>

          <view class="slider-container">
            <view class="left-text">A</view>
            <!--          <slider class="slider" bindchanging="fontSizeChange" min="28" max="60" value="{{newsData.fontSize}}"></slider>-->
            <view class="sliderBox">
              <view class="slider1">
                <van-slider value="50" bar-height="7rpx" active-color="#1aad19" />
              </view>
            </view>
            <view class="right-text">A</view>
          </view>

<!--        </view>-->

      </van-action-sheet>

    </view>
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
  title: "习近平在金砖国家领导人第十三次会晤上的讲话",
  image: "https://wasterecycle.xyz/images/waste_recycle/news2/news2.png",
  summary: "习近平：我们将扩大合作空间，加大对共建“一带一路”国家服务业发展的支持，同世界共享中国技术发展成果。",
  content: [
    "当前，新冠肺炎疫情仍在全球肆虐，世界经济复苏艰难曲折，国际秩序演变深刻复杂。面对挑战，金砖国家要展现担当，为世界和平与发展作出积极贡献，推动构建人类命运共同体。",
    "——我们要推动践行真正的多边主义，恪守联合国宪章宗旨和原则，维护以联合国为核心的国际体系和以国际法为基础的国际秩序。",
    "——我们要推动全球团结抗疫，携手应对疫情，坚持科学溯源，反对政治化、污名化，加强联防联控，促进疫苗作为全球公共产品的研发、生产、公平分配。",
    "——我们要推动开放创新增长，助力世界经济平稳复苏，维护展务实合作，推动金砖国家疫苗研发中心在线上尽快启动。要加强传统医药合作，为抗击疫情提供更多手段。",
    "我们应该坚决维护联合国权威和地位，共同践行真正的多边主义。推动构建人类命运共同体，需要一个强有力的联合国，需要改革和建设全球治理体系。世界各国应该维护以联合国为核心的国际体系、以国际法为基础的国际秩序、以联合国宪章宗旨和原则为基础的国际关系基本准则。国际规则只能由联合国193个会员国共同制定，不能由个别国家和国家集团来决定。国际规则应该由联合国193个会员国共同遵守，没有也不应该有例外。对联合国，世界各国都应该秉持尊重的态度，爱护好、守护好这个大家庭，决不能合则利用、不合则弃之，让联合国在促进人类和平与发展的崇高事业中发挥更为积极的作用。中国愿同各国秉持共商共建共享理念，探索合作思路，创新合作模式，不断丰富新形势下多边主义实践。"
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

function onClose(){
  newsData.showModal = false
}

function onDrag(event){
  newsData.fontSize = event.detail.value;
}

function pop(event) {
  newsData.showModal=true;
}

function hide(event) {
  newsData.showModal=false;
}

function fontSizeChange(event) {
  newsData.fontSize = event.detail.value;
  newsData.lineHeight = event.detail.value;
}

function selectColor1(event) {
  newsData.selectColorIndex = 1;
  newsData.backgroundColor = '#FFFFFF';
  newsData.fontColor = '#26262E';
}

function selectColor2(event) {
  newsData.selectColorIndex = 2;
  newsData.backgroundColor = '#FFF5D6';
  newsData.fontColor = '#26262E';
}

function selectColor3(event) {
  newsData.selectColorIndex = 3;
  newsData.backgroundColor = '#1e2039';
  newsData.fontColor = '#ffffff';
}

function selectWeight1(event) {
  newsData.selectWeightIndex = 1;
  newsData.fontWeight = 'normal';
}

function selectWeight2(event) {
  newsData.selectWeightIndex = 2;
  newsData.fontWeight = 'bold';
}

function selectWeight3(event) {
  newsData.selectWeightIndex = 3;
  newsData.fontWeight = '1000';
}



</script>

<style scoped>

.slider-container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40rpx;
  margin-bottom: 100rpx;
  width: 100%;
}

.sliderBox {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  vertical-align: middle;
}

.slider1 {

  width: 70vw;
}

.news-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 162rpx;
  overflow-y: auto;
}


.title {
  position: relative;
  width: 654rpx;
  height: 108rpx;
  margin-left: 48rpx;
  margin-top: 35rpx;
  font-size: 34rpx;
  font-family: "黑体";
  font-weight: bold;
}

.sTitle {
  position: relative;
  margin-left: 48rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sour {
  font-size: 23rpx;
  font-family: "黑体";
  color: #515158;
}

.time {
  margin-left: 20rpx;
  font-size: 23rpx;
  font-family: "黑体";
  color: #515158;
}

.img-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
  margin-left: 48rpx;
  width: 654rpx;
  height: 334rpx;
  border-radius: 10rpx;
}

.img {
  position: relative;
  width: 654rpx;
}

.summary {
  position: relative;
  margin-top: 30rpx;
  margin-left: 48rpx;
  font-size: 29rpx;
  font-family: "黑体";
  font-weight: bold;
  width: 664rpx;
}

.content-style {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30rpx;
  margin-left: 48rpx;
  margin-bottom: 20rpx;
  width: 654rpx;
}

.review {
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  height: 130rpx;
  width: 100%;
}

.input {
  position: relative;
  margin: 30rpx 0;
  border-radius: 50rpx;
  width: 384rpx;
  height: 60rpx;
  margin-left: 40rpx;
  margin-top: 0rpx;
  background-color: #F0F0F0;
  font-size: 27rpx;
  font-family: "黑体";
  color:#26262E;
  padding-left: 30rpx;
  padding-right: 30rpx;
}

.icon-container {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 20rpx;
}

.icon {
  position: relative;
  margin-left: 28rpx;
  margin-top: 11rpx;
  font-size: 37rpx;
  font-weight: bold;
}

.function {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 704rpx;
  bottom: 0;
  left: 0;
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  background-color: #fff;
  z-index: 100;
}

.color-style {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 80rpx;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  height: 104rpx;
  width: 560rpx;
}

.white {
  position: relative;
  margin-top: 0;
  margin-left: 0;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.white-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: normal;
  color: #26262E;
  border: 1px solid rgba(38, 38, 46, 0.3);
  border-radius: 15rpx;
}

.text {
  position: relative;
  margin-top: 25rpx;
  font-size: 24rpx;
  font-family: "黑体";
  font-weight: normal;
  color: rgba(38, 38, 46, 0.3);
}

.warm {
  position: relative;
  margin-top: 0;
  margin-left: 80rpx;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.warm-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: bold;
  background-color: #FFF5D6;
  color: #26262E;
  border-radius: 15rpx;
}

.black {
  position: relative;
  margin-left: 80rpx;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.black-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: bold;
  background-color: #1E2039;
  color: #FFF;
  border-radius: 15rpx;
}

.weight-style {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 80rpx;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  height: 104rpx;
  width: 560rpx;
}

.normal {
  position: relative;
  margin-top: 0;
  margin-left: 0;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.normal-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: normal;
  color: #26262E;
  border: 1px solid rgba(38, 38, 46, 0.3);
  border-radius: 15rpx;
}


.bold {
  position: relative;
  margin-top: 0;
  margin-left: 80rpx;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.bold-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: bold;
  color: #26262E;
  border: 1px solid rgba(38, 38, 46, 0.3);
  border-radius: 15rpx;
}



.bolder {
  position: relative;
  margin-top: 0;
  margin-left: 80rpx;
  width: 144rpx;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.bolder-img {
  position: relative;
  height: 72rpx;
  line-height: 72rpx;
  font-size: 36rpx;
  font-family: "黑体";
  font-weight: bolder;
  color: #26262E;
  border: 1px solid rgba(38, 38, 46, 0.3);
  border-radius: 15rpx;
}

/*.slider-container {*/
/*  position: relative;*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  margin-top: 40rpx;*/
/*  width: 100%;*/
/*}*/

.left-text {
  position: relative;
  margin-left: 20rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #26262E;
}

.right-text {
  position: relative;
  /*margin-left: 40rpx;*/
  font-size: 60rpx;
  font-weight: bold;
  color: #26262E;
}

.goBack {
  position: absolute;
  top: 20rpx;
  right: 40rpx;
  font-size: 30rpx;
  font-weight: bold;
  color: #26262E;
}

.pHead {
  position: relative;
  font-family: "黑体";
  color: #515158;
}

</style>