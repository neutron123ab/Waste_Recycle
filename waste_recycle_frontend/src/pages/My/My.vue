<template>

  <view class="my">
    <view class="userinfo">
      <image class="user-icon" :src="myData.userinfo.avatarUrl"/>
      <view class="username">{{myData.userinfo.nickname}}</view>
    </view>

    <view class="menu-list">
      <block v-for="item in myData.menuList" wx:key="index">

        <view class="li">
          <navigator class="href" url="{{item.url}}">
            <view class="icon iconfont" :class="item.icon"></view>
            <view class="text">
              {{item.text}}
            </view>
          </navigator>
        </view>
      </block>
    </view>

    <image class="background1" src="https://wasterecycle.xyz/images/waste_recycle/my/home.png"></image>
    <image class="background2" src="https://wasterecycle.xyz/images/waste_recycle/my/home.png"></image>
  </view>


</template>

<script setup>

import {onBeforeMount, reactive} from "vue";

const myData = reactive({
  userinfo: {
    avatarUrl: '',
    nickname: ''
  },
  menuList: [{
    icon: "icon-order",
    text: "全部订单",
    url: ""
  }, {
    icon: "icon-dizhidingwei",
    text: "我的地址",
    url: ""
  }, {
    icon: "icon--love",
    text: "站点收藏",
    url: ""
  }, {
    icon: "icon-Wallet1",
    text: "红包卡卷",
    url: ""
  }, {
    icon: "icon-remind1",
    text: "消息提醒",
    url: "icon-locate1e"
  }, {
    icon: "icon-user",
    text: "个人中心",
    url: ""
  }, {
    icon: "icon-settings2",
    text: "常用设置",
    url: ""
  }
  ]
})

onBeforeMount(load)

function load(){
  myData.userinfo = uni.getStorageSync('userinfo')
}

</script>

<style scoped>

.my {
  padding: 0 24rpx;
  margin-top: 200rpx;
  position: relative;
}
.my .userinfo {
  padding-left: 24rpx;
}
.my .userinfo .user-icon {
  height: 120rpx;
  width: 120rpx;
  margin-top: 40rpx;
  border-radius: 60rpx;
}
.my .userinfo .username {
  color: #1b1b21;
  margin-top: 20rpx;
  font-size: 48rpx;
  line-height: 64rpx;
}
.my .menu-list {
  margin-top: 60rpx;
}
.my .menu-list .li {
  margin: 30rpx;
  padding: 20rpx 0;
}
.my .menu-list .li .href {
  width: 220rpx;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.my .menu-list .li .href .icon {
  padding: 0 5rpx;
  font-size: 50rpx;
}
.my .menu-list .li .href .text {
  display: inline-block;
  margin-left: 10rpx;
}
.my .background1 {
  height: 1160rpx;
  position: absolute;
  top: 80rpx;
  right: -250rpx;
  z-index: -1;
}
.my .background2 {
  height: 1000rpx;
  position: absolute;
  top: 140rpx;
  right: -150rpx;
  z-index: -2;
  filter: opacity(20%);
}




</style>