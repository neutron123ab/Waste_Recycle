<template>
  <van-nav-bar
      title="修改商品"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
  />

  <view class="noSailed">



    <view class="a"></view>
    <view class="text">请修改商品信息</view>
    <view class="a"></view>

    <view class="cell-group">

      <van-field
          :value="data[0].goodsName"
          placeholder="请输入商品名"
          @change="onChangeName"
          label="商品名"
      />
      <van-field
          :value="data[0].price"
          placeholder="请输入价格"
          @change="onChangePrice"
          label="单价"
      />

      <van-field name="stepper" label="数量">
        <template #input>
          <van-stepper :value="num" @change="onChangeNum"/>
        </template>
      </van-field>

      <van-field
          :value="data[0].category"
          is-link
          readonly
          name="picker"
          label="商品类型"
          placeholder="点击选择类别"
          @tap="onClickVar"
      />
      <van-popup :show="data[0].showPicker" position="bottom">
        <van-picker
            show-toolbar="true"
            :columns="columns"
            @confirm="onConfirm"
            @cancel="data[0].showPicker = false"
        />
      </van-popup>

      <van-cell title="商品图片" use-label-slot title-style="color: #646566">
        <view class="valueBox">
          <van-image
              width="150rpx"
              height="100rpx"
              fit="contain"
              :src="picture(data[0].pictureId)"
          />
          <van-button type="primary" @tap="uploadBtn" class="up">上传</van-button>
        </view>
      </van-cell>

      <van-field
          :value="data[0].addressName"
          placeholder="点击选择地址"
          @tap="chooseLocation"
          @change="onChangeAddress"
          autosize
          type="textarea"
          label="地址"
      />

      <van-field
          :value="data[0].introduce"
          placeholder="请输入商品简介"
          @change="onChangeIntroduce"
          autosize
          type="textarea"
          label="简介"
      />

    </view>

    <view class="a"></view>

    <van-button class="btn" round block type="primary" @tap="uploadInfo">修改</van-button>

  </view>

</template>

<script setup>
import {computed, reactive, ref} from "vue";
import commonConfig from "../../../wxcomponents/config/commonConfig";
import {onLoad} from "@dcloudio/uni-app";
import store from "../../store";

const data = reactive([])
const columns = ref(['办公用品', '服饰鞋帽', '书籍', '美妆个护', '家具', '生活用品', '数码', '食品', '电器', '其他'])
const num = ref(1)

onLoad((option)=>{
  const item = JSON.parse(decodeURIComponent(option.item))
  data.push(item)
})


function  onClickLeft(){
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

function uploadInfo(){

  if(!data[0].goodsName || !data[0].category || !data[0].addressName || !data[0].price || num.value === 0){
    uni.showToast({
      title: '输入不能为空',
      icon: 'error'
    })
  } else {
    uni.request({
      method: "PUT",
      url: "/goods",
      data: {
        ...data[0]
      },
      success:function (res){
        if(res.data === 1){
          uni.showToast({
            title: "修改成功",
            icon: "success"
          })
          store.commit("change", 1);  //使数据展示页面刷新数据
        }

      }
    })
  }


}

function chooseLocation(){
  uni.chooseLocation({
    success:function (res){
      data[0].address = res.address;
      data[0].addressName = res.name
    }
  })
}

function uploadBtn() {

  uni.chooseImage({
    success: (chooseImageRes) => {
      const tempFilePaths = chooseImageRes.tempFilePaths;
      const tempFiles = chooseImageRes.tempFiles;

      uni.uploadFile({
        url: '/grid',
        filePath: tempFilePaths[0],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: (res) => { //图片上传后需要获得数据库中的id
          uni.request({
            method: "DELETE",
            url: "/grid?pictureId="+data[0].pictureId,
            success:function (){
              data[0].pictureId = res.data
            }
          })

        }
      });
    }
  });
}


function onClickVar() {
  data[0].showPicker = true
}

function onConfirm(event) {
  data[0].category = event.detail.value;
  data[0].showPicker = false;
}

function onChangeName(event) {
  data[0].goodsName = event.detail
}

function onChangePrice(event) {
  data[0].price = event.detail
}

function onChangeIntroduce(event) {
  data[0].introduce = event.detail
}

function onChangeNum(event) {
  num.value = event.detail
}

function onChangeAddress(event) {
  data[0].address = event.detail
}

</script>

<style>

.a {
  height: 30rpx;
}


.noSailed {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30 rpx;
}

.text {
  margin-top: 30 rpx;
  margin-bottom: 30 rpx;
  font-family: '思源黑体';
  font-size: large;
}

.cell-group {
  width: 90%;
  margin-top: 30 rpx;
}

.btn {
  margin-top: 30 rpx;
  width: 90%;
}

.valueBox {
  display: flex;
  flex-direction: row;
}

.valueBox .up {
  margin-left: 20rpx;
}

page {
  background-color: #f7f8fa;
}

</style>