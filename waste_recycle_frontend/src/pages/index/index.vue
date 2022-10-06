<template>
  <view class="login">
    <image class="background" src="https://wasterecycle.xyz/images/waste_recycle/login/index.png"></image>
    <view class="login-box">
      <view class="t1">环易</view>
      <view class="t2">固废资源回收，从你我做起</view>
      <view class="button-group">
        <view class="button">注册</view>
        <view class="button" @tap="onTapJump">登录</view>
      </view>
    </view>
  </view>

</template>

<script setup>

import {onBeforeMount} from "vue";

onBeforeMount(()=>{
  uni.getStorage({
    key: "openid",
    success:function (){
      uni.redirectTo({
        url: "/pages/main/MainPage"
      })
    }
  })
})

function onTapJump(){

  uni.navigateTo({
    url: '/pages/index/UserInfo'
  })
}



</script>

<style>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.login .background {
  width: 100%;
  height: 100%;
}
.login .login-box {
  position: absolute;
  width: calc(100vw - 96rpx);
  bottom: 160rpx;
  padding: 0 48rpx;
}
.login .login-box .t1 {
  color: #aef516;
  font-size: 88rpx;
  line-height: 92rpx;
  font-family: '庞门正道标题体';
  font-weight: bold;
}
.login .login-box .t2 {
  margin-top: 40rpx;
  mix-blend-mode: normal;
  color: #aef516;
  font-size: 28rpx;
  line-height: 44rpx;
  font-family: '黑体';
}
.login .login-box .button-group {
  margin-top: 150rpx;
  display: flex;
  justify-content: space-around;
}
.login .login-box .button-group .button {
  width: 250rpx;
  height: 70rpx;
  border: 1px solid #FF673D;
  border-radius: 35rpx;
  text-align: center;
  line-height: 70rpx;
  font-weight: bold;
  font-size: 35rpx;
  color: #FFFFFF;
  background-color: #FF673D;
}
.login .login-box .button-group .button:first-child {
  background-color: rgba(0, 0, 0, 0);
}

</style>
