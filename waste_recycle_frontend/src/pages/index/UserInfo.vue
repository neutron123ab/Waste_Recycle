<template>

  <view class="userInfo">
    <van-nav-bar title="weixin"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft"/>

    <view class="b"></view>

    <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
      <van-image width="200rpx" height="200rpx" :src="data.avatarUrl" />
    </button>
    <view class="c"></view>
    <view class="fieldBox">
      <van-field
          :value="data.nickname"
          type="nickname"
          label="昵称"
          placeholder="请输入昵称"
          @blur="onChange"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
    </view>

    <view class="btnBox">
      <van-button type="primary" block @tap="onClickJump">完成</van-button>
    </view>


  </view>

  <van-toast id="van-toast" />


</template>

<script setup>

import {reactive} from "vue";

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const data = reactive({
  avatarUrl: defaultAvatarUrl,
  nickname: '',
  userinfo: {}
})

function onChooseAvatar(e) {
  const { avatarUrl } = e.detail
  data.avatarUrl = avatarUrl
}

function onChange(event){
  data.nickname = event.detail.value
  console.log(data.nickname)
}

function onClickLeft(){
  uni.navigateBack({
    delta: 1
  })
}

function onClickJump(){

  if(data.nickname.length!==0){
    uni.login({
      provider: "weixin",
      success:function (res){
        uni.request({
          method: "GET",
          url: "/login",
          data: {
            "code": res.code
          },
          success:function (response){
            let openid = response.data.openid;
            //获取到用户openid
            if(openid.length!==0){
              uni.setStorage({
                key: 'openid',
                data: openid
              });
              data.userinfo = {
                'nickname': data.nickname,
                'avatarUrl': data.avatarUrl
              }
              uni.setStorage({
                key: 'userinfo',
                data: data.userinfo
              })
              uni.redirectTo({
                url: "/pages/main/MainPage"
              })
              console.log(data.userinfo)
              uni.showToast({
                title: '登录成功',
                icon: 'success'
              })
            } else {
              uni.showToast({
                title: '请完善信息',
                icon: 'error'
              })
            }
          }
        })
      }
    })
  } else{
    uni.showToast({
      title: '请完善信息',
      icon: 'error'
    })
  }
}

</script>

<style scoped>

.avatar-wrapper {
  width: 200rpx;
  height: 200rpx;
}

button {
  padding-left: 0;
  padding-right: 0;
}

.userInfo {
  display: flex;
  flex-direction: column;
}

.fieldBox {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.b {
  height: 80rpx;
}

.c {
  height: 30rpx;
}

.btnBox {
  margin-top: 30rpx;
}

</style>