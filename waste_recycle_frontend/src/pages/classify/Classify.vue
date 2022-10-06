<template>


  <van-nav-bar
      title="商品分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <view class="classify">

    <van-search
        placeholder="搜索当前类型的商品"
        shape="round"
        :value="searchVal"
        use-action-slot
        @change="onChange"
        @search="onSearch"
    >
      <view slot="action" @tap="onSearch">搜索</view>
    </van-search>
    <van-tree-select
        v-model:active-id="data.activeId"
        v-model:main-active-index="data.activeIndex"
        :items="data.items"
        height="82vh"
        class="tree-select"
        @click-nav="onClickNav"
        @click-item="onClickItem"
    >

      <template slot="content">
        <van-empty
            v-if="cards[data.activeIndex].length === 0"
            class="custom-image"
            image="../../../static/no.png"
            description="已售空~"
        />

        <view v-if="cards[data.activeIndex].length !== 0">
          <view v-for="(item, index) in cards[data.activeIndex]">
            <van-card
                :num="item.num"
                :price="item.price"
                :title="item.goodsName"
                :thumb="picture(item.pictureId)"
                thumb-mode="cover"
                @tap="onTapCard(item, index)"
            >
              <template #desc>
                <view>简介：{{introduce(item.introduce)}}</view><br>
                <view>售卖人：{{item.userName}}</view><br>
                <view>地址：{{item.addressName}}</view><br>
              </template>
            </van-card>
          </view>
        </view>
      </template>

    </van-tree-select>

  </view>

</template>

<script setup>

import {computed, onBeforeMount, reactive, ref, watch} from "vue";
import store from "../store";
import commonConfig from "../../wxcomponents/config/commonConfig";

onBeforeMount(initData)

watch(()=>store.state.num, (((value, oldValue) => {

  let index = store.state.cardIndex
  if(value <= 0){  //监听商品余量，余量为0时从列表中移除
    cards[data.activeIndex].splice(index, 1);
  }
  if(value !== 0){
    cards[data.activeIndex][index].num = value
  }

})))

function introduce(desc){
  let tmp = desc.toString();
  if(tmp.length > 10){
    return tmp.slice(0,9) + "..."
  }
  return desc;
}

function initData(){
  let category = ''
  switch (data.activeIndex){
    case 0:
      category = "办公用品";
      break;
    case 1:
      category = "服饰鞋帽";
      break;
    case 2:
      category = "书籍";
      break;
    case 3:
      category = "美妆个护";
      break;
    case 4:
      category = "家具";
      break;
    case 5:
      category = "生活用品";
      break;
    case 6:
      category = "数码";
      break;
    case 7:
      category = "食品";
      break;
    case 8:
      category = "电器";
      break;
    case 9:
      category = "其他";
      break;
  }

  uni.request({
    method: "GET",
    url: "/goods/category",
    data: {
      category
    },
    success:function (res){
      console.log(res.data)
      if(res.data.length !== 0){
        for (let i = 0; i <= cards.length; i++) {
          cards[data.activeIndex].pop();
        }
        cards[data.activeIndex].pop();
        for (let i = 0; i < res.data.length; i++) {
          cards[data.activeIndex].push(res.data[i]);
        }
      }
    }
  })

}

function onTapCard(item, index){
  store.commit('cardIndexChange', index);
  uni.navigateTo({
    url: "/pages/buyGoods/BuyGoods?item=" + encodeURIComponent(JSON.stringify(item))
  })
}

const data = reactive({
  activeId: 0,
  activeIndex: store.state.activeIndex,
  items: [{text:'办公用品'},{text:'服饰鞋帽'},{text:'书籍'},
    {text:'美妆个护'},{text:'家具'},{text:'生活用品'},
    {text:'数码'},{text:'食品'},{text:'电器'},{text:'其他'}]
})
const cards = reactive([[],[],[],[],[],[],[],[],[],[]])
const searchVal = ref('')

function onChange(e){
  searchVal.value = e.detail;
}

function onSearch(){
  uni.request({
    method: "GET",
    url: "/goods/like",
    data: {
      goodsName: searchVal.value,
      category: data.items[data.activeIndex].text
    },
    success:function (res){
      if(res.data.length !== 0){
        for (let i = 0; i <= cards[data.activeIndex].length; i++) {
          cards[data.activeIndex].pop();
        }
        cards[data.activeIndex].pop();
        cards[data.activeIndex].pop();
        cards[data.activeIndex].pop();
        for (let i = 0; i < res.data.length; i++) {
          cards[data.activeIndex].push(res.data[i])
        }
      } else if(res.data.length === 0){
        let num = cards[data.activeIndex].length;
        for (let i = 0; i < num; i++) {
          cards[data.activeIndex].pop();
        }
      }
    }
  })
}

function onClickLeft(){
  store.commit('rankFlush', true);
  uni.navigateBack({
    delta: 1
  })
}

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

function onClickNav(event){
  data.activeIndex = event.detail.index
  initData();
}

function onClickItem(event){
  data.activeId = event.detail.id
  console.log(data.activeId)
}

</script>

<style scoped>

.classify {
  display: flex;
  flex-direction: column;
}

</style>