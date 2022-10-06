<template>

  <view class="trade">

    <van-sticky>
      <van-nav-bar title="二手交易平台"></van-nav-bar>
    </van-sticky>

    <image mode="aspectFit" class="img" src="https://wasterecycle.xyz/images/waste_recycle/trade/hotspot.png"></image>
    <van-search
        placeholder="搜索商品"
        shape="round"
        use-action-slot
        @change="onChange"
        @search="onSearch"
    >
      <view slot="action" @tap="onClick">搜索</view>
    </van-search>

    <van-grid clickable column-num="5">
      <van-grid-item icon-prefix="t-icon" icon="bangongyongpin" text="办公用品" @tap="onClickClassify(0)"/>
      <van-grid-item icon-prefix="t-icon" icon="yifu" text="服饰鞋帽" @tap="onClickClassify(1)"/>
      <van-grid-item icon-prefix="t-icon" icon="shuji" text="书籍" @tap="onClickClassify(2)"/>
      <van-grid-item icon-prefix="t-icon" icon="kouhong" text="美妆个护" @tap="onClickClassify(3)"/>
      <van-grid-item icon-prefix="t-icon" icon="fangzi" text="家具" @tap="onClickClassify(4)"/>
    </van-grid>
    <van-grid clickable column-num="5">
      <van-grid-item icon-prefix="t-icon" icon="-" text="生活用品" @tap="onClickClassify(5)"/>
      <van-grid-item icon-prefix="t-icon" icon="xiangji" text="数码" @tap="onClickClassify(6)"/>
      <van-grid-item icon-prefix="t-icon" icon="shipin_pisa" text="食品" @tap="onClickClassify(7)"/>
      <van-grid-item icon-prefix="t-icon" icon="dianqi" text="电器" @tap="onClickClassify(8)"/>
      <van-grid-item icon-prefix="t-icon" icon="quanbu" text="全部分类" @tap="onClickClassify(0)"/>
    </van-grid>

    <view class="text">热销推荐</view>

    <van-empty
        v-if="rankData.length === 0"
        class="custom-image"
        image="../../../static/no.png"
        description="空空如也~"
    />

    <view v-if="rankData.length !== 0" v-for="(item, index) in rankData" class="van-card-full">
      <van-card
          :tag="index + 1"
          :price="item.price"
          :title="item.goodsName"
          :desc="introduce(item.introduce)"
          :thumb="picture(item.pictureId)"
          thumb-mode="contain"
      >
        <template #tags>
          <van-tag plain type="danger">{{item.category}}</van-tag>
          <van-tag plain type="danger" style="margin-left: 10rpx">已售{{item.sailedNum}}件</van-tag>
        </template>

      </van-card>
    </view>
    <van-button class="button" block round color="#ada3ff" @tap="onTap">我的二手物品管理</van-button>

    <view class="a"></view>

  </view>

</template>

<script setup>

import {onBeforeMount, reactive, watch} from "vue";
import store from "../store";
import commonConfig from "../../wxcomponents/config/commonConfig";

const rankData = reactive([])

onBeforeMount(initRank)

watch(()=> store.state.rankFlush, (((value, oldValue) => {
  if(store.state.rankFlush === true){
    initRank();
    store.state.rankFlush = false;
  }
})))

function initRank(){
  uni.request({
    method: "GET",
    url: "/order/rank",
    success:function (res){
      let length = res.data.length;
      for (let i = 0; i < length; i++) {
        rankData.pop();
      }
      for (let i = 0; i < length; i++) {
        rankData.push(res.data[i])
      }
    }
  })
}

const data = reactive({
  active: false
})
function onTap(){
  uni.navigateTo({
    url: "/pages/manage/Manage"
  })
}

function introduce(desc){
  return "简介：" + desc
}

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

function onClickClassify(index){
  store.commit('gridIndex', index);
  uni.navigateTo({
    url: "/pages/classify/Classify"
  })
}

</script>

<style scoped>

.a {
  height: 200rpx;
}

.trade {
  display: flex;
  flex-direction: column;
}

.img {
  width: 100%;
  height: 10rem;
}

.text {
  font-family: '黑体';
  font-size: 34rpx;
  margin-left: 30rpx;
  margin-top: 24rpx;
  margin-bottom: 10rpx;
}

.button {
  margin-top: 14rpx;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.van-card-full{
  margin: 10rpx auto;
  width: 90%;
  box-shadow: 0 5rpx 10rpx #FAFAFA;
}

</style>