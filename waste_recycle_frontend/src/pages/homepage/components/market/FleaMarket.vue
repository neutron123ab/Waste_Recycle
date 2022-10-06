<template>
  <van-action-sheet :show="data.show" title="标题" @close="onClose">
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>
    <view>内容</view>
  </van-action-sheet>



  <image class="bottomImg" src="https://wasterecycle.xyz/images/waste_recycle/homepage/banner1.png"></image>

</template>

<script setup>

import {reactive} from "vue";

const data = reactive({
  currentValue: 50,
  show: true
})

function onClose(){
  data.show = false
}

function onDrag(event){
  data.currentValue=event.detail.value;
}

</script>

<style scoped>
.bottomImg {
  height: 210rpx;
  margin: 70rpx 40rpx 190rpx;
}

</style>