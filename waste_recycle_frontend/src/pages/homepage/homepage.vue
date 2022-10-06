<template>
  <PageHead class="page"></PageHead>
  <ClassifyBtn></ClassifyBtn>

</template>

<script setup>
import ClassifyBtn from "./components/common/ClassifyBtn";
import PageHead from "./components/common/PageHead";
import {reactive} from "vue";

const active = reactive({num:0})

function onChange(event){
  active.num = event.detail
}


</script>

<style>

.page {
  display: flex;
  margin-top: 95rpx;
}

</style>