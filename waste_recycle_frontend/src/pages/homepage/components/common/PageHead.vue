<template>
  <view class="pageHead">
    <view class="up">
      <view>送至</view>
      <van-icon name="arrow-down"/>
    </view>
    <view class="down">合肥工业大学宣城校区..</view>
    <view class="search">
      <input v-model="search.val" type="text" class="input" placeholder="搜索附近的回收站点，提高你的效率，享受此时生活"/>
      <view class="iconfont icon-search1 searchImg"></view>
    </view>
    <view>{{search.val}}</view>
  </view>



</template>

<script setup>
import {reactive} from "vue";

const search = reactive({
  val: ''
})

</script>

<style scoped>

.pageHead {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 170rpx;
  width: 100%;
}

.pageHead .up {
  display: flex;
  flex-direction: row;
  font-size: 23rpx;
  font-family: '阿里巴巴普惠体';
  color: #A6A6A6;
}

.pageHead .down {
  font-size: 30rpx;
  color: #aef516;
  font-family: '阿里巴巴普惠体';
}

.search {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 40rpx;
  align-items: center;
}

.input {
  position: relative;
  border-radius: 50rpx;
  width: 660rpx;
  height: 67rpx;
  margin: 30 rpx auto;
  background-color: #F6F6F6;
  font-size: 25rpx;
  font-family: "黑体";
  padding-left: 30rpx;
  padding-right: 30rpx;
}

.searchImg {
  position: absolute;
  right: 43rpx;
  font-size: 45rpx;
  color: #A6A6A6;
  text-align: center;
}


</style>