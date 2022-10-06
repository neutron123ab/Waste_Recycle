<template>

  <home-page to="/homepage" v-if="active.num===0"></home-page>
  <trade to="/trade" v-if="active.num===1"></trade>
  <order-list to="/orderList" v-if="active.num===2"></order-list>
  <my to="/my" v-if="active.num===3"></my>

  <view v-if="active.num===3" class="logoutBtn" @tap="test1">
    <van-dialog id="van-dialog" confirm-button-color="#aef516"/>
    <van-button type="danger" round plain>退出登录</van-button>
  </view>

  <van-tabbar :active="active.num" @change="onChange">
    <van-tabbar-item icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item icon="shop-o">交易</van-tabbar-item>
    <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
    <van-tabbar-item icon="user-o">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup>
import {reactive} from "vue";
import Dialog from "../../wxcomponents/vant/dialog/dialog";

const active = reactive({
  num: 0,
})

function onChange(event) {
  active.num = event.detail
}

function test1() {
  uni.showModal({
    title: '退出提醒',
    content: '确认要退出登录吗？',
    success:function (res){
      if(res.confirm){
        quit();
      }
    }
  })
}

function quit() {
  uni.removeStorage({
    key: 'userinfo',
    success: function () {
      uni.removeStorage({
        key: 'openid',
        success: function (){
          uni.redirectTo({
            url: "/pages/index/index"
          })
        }
      })
    }
  })
}

</script>

<style>
.logoutBtn {
  position: absolute;
  margin-left: 50rpx;
}

page {
  background-color: #f7f8fa;
}


</style>