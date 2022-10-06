<template>

  <van-sticky>
    <van-nav-bar
        title="出售管理"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
  </van-sticky>

  <view class="manage">

    <van-tabs :active="data.active" @change="onChange" color="#b1efd9">
      <van-tab title="我要出售">
        <no-sailed to="/noSailed"></no-sailed>
      </van-tab>
      <van-tab title="已出售">
        <sailed to="/sailed"></sailed>
      </van-tab>
    </van-tabs>

  </view>

</template>

<script setup>

import {reactive, watch} from "vue";
import Sailed from "./components/Sailed";
import NoSailed from "./components/NoSailed";
import store from "../store";

const data = reactive({
  active: 0
})

function onClickLeft() {
  store.commit('rankFlush', true);
  uni.navigateBack({
    delta: 1
  })
}

function onChange(event) {
  data.active = event.detail.index
  let id = store.state.active
  store.commit('change', data.active)
  console.log(store.state.active)
}

</script>

<style scoped>

.manage {
  display: flex;
  flex-direction: column;
}

</style>