<template>

  <view class="sailed">


    <van-empty
        v-if="items.length === 0"
        class="custom-image"
        image="../../../static/no.png"
        description="空空如也~"
    />

    <view v-if="items.length !== 0">
      <view v-for="item in items" class="van-card-full">
        <van-card
            :num="item.num"
            :price="item.price"
            :title="item.goodsName"
            :thumb="picture(item.pictureId)"
            thumb-mode="cover"
        >
          <template #desc>
            <view>简介：{{introduce(item.introduce)}}</view><br>
            <view>类别：{{item.category}}</view><br>
            <view>提交时间：{{item.uploadTime}}</view><br>
          </template>
          <view slot="footer">
            <van-button type="info" size="mini" @tap="updateGoodsInfo(item)">修改</van-button>
            <van-button class="btn" type="danger" size="mini" @tap="deleteGoods(item.goodsName)">删除</van-button>
          </view>
        </van-card>
      </view>

    </view>

    <uni-pagination
        v-if="items.length !== 0"
        class="icon"
        showIcon="true"
        :total="pagination.total"
        :current="pagination.current"
        :pageSize="pagination.pageSize"
        @change="change"
        title="标题" />

  </view>

</template>

<script setup>

import {onBeforeMount, reactive, watch} from "vue";
import store from "../../store";
import commonConfig from "../../../wxcomponents/config/commonConfig";

const items = reactive([])
const pagination = reactive({
  current: 1,
  total: 0,
  pageSize: 4
})

watch(()=> store.state.active, ((value, oldValue) => {
  if (value === 1){
    initData();
    store.commit("change", 0)
  }
}))

function introduce(desc){
  let tmp = desc.toString();
  if(tmp.length > 10){
    return tmp.slice(0,9)+"..."
  }
  return desc
}

function change(e){
  let openid = uni.getStorageSync("openid");
  pagination.current = e.current;
  uni.request({
    method: "GET",
    url: "/goods/page",
    data: {
      openid,
      page: pagination.current - 1,
      pageSize: pagination.pageSize
    },
    success:function (res){
      if(res.data.records.length !== 0){
        console.log(res.data,res.data,res.data)
        for (let i = 0; i <= items.length; i++) {
          items.pop();
        }
        items.pop();
        for (let i = 0; i < res.data.records.length; i++){
          items.push(res.data.records[i]);
        }
        pagination.total = res.data.total;
      }
    }
  })
}

function updateGoodsInfo(item){
  uni.navigateTo({
    url: '/pages/manage/components/Update?item='+encodeURIComponent(JSON.stringify(item))
  })
}


function deleteGoods(goodsName){
  uni.showModal({
    title: '提醒',
    content: '是否删除该商品',
    success:function (res){
      if(res.confirm){
        uni.request({
          method: 'DELETE',
          url: '/goods',
          data: {
            openid: uni.getStorageSync('openid'),
            goodsName
          },
          success:function (result){
            if(result.data === 0){
              uni.showToast({
                title: '删除失败',
                icon: 'error'
              })
            }else {
              store.commit('change', 1)
              uni.showToast({
                title: '删除成功',
                icon: 'success'
              })
              if(items.length === 1){
                items.pop()
              }
            }

          }
        })
      }
    }
  })
}

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

onBeforeMount(initData)

function initData(){
  let id = store.state.active
  console.log(id)
  if(id === 1){
    let openid = uni.getStorageSync('openid')
    uni.request({
      method: "GET",
      url: "/goods/page",
      data: {
        openid,
        page: pagination.current - 1,
        pageSize: pagination.pageSize
      },
      success:function (res){
        console.log(res.data,res.data,res.data)
        if(res.data.records.length!==0){
          for(let i = 0; i <= res.data.records.length; i++){
            items.pop()
          }
          for(let i = 0; i < res.data.records.length; i++){
            items.push(res.data.records[i])
          }
          pagination.total = res.data.total;
        }
      }
    })
  }

}

</script>

<style>

page {
  --card-background-color: #ffffff;
}

.sailed {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.van-card-full{
  margin: 15rpx auto;
  width: 90%;
  box-shadow: 0 5rpx 10rpx #FAFAFA;
}

.btn {
  margin-left: 10rpx;
}

.icon {
  width: 70%;
  position: absolute;
  bottom: 120rpx;
  left: 0;
  right: 0;
  margin: 0 auto;
}

</style>