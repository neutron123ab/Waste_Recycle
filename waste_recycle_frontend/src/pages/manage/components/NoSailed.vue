<template>

  <view class="noSailed">

    <view class="a"></view>
    <view class="text">请填写商品信息</view>
    <view class="a"></view>

    <view class="cell-group">

      <van-field
          :value="data.goodsName"
          placeholder="请输入商品名"
          @change="onChangeName"
          label="商品名"
      />
      <van-field
          :value="data.price"
          placeholder="请输入价格"
          @change="onChangePrice"
          label="单价"
      />

      <van-field name="stepper" label="数量">
        <template #input>
          <van-stepper :value="data.num" @change="onChangeNum"/>
        </template>
      </van-field>

      <van-field
          :value="data.category"
          is-link
          readonly
          name="picker"
          label="商品类型"
          placeholder="点击选择类别"
          @tap="onClickVar"
      />
      <van-popup :show="data.showPicker" position="bottom">
        <van-picker
            show-toolbar="true"
            :columns="data.columns"
            @confirm="onConfirm"
            @cancel="data.showPicker = false"
        />
      </van-popup>

      <van-cell title="商品图片" use-label-slot title-style="color: #646566">
        <view class="valueBox">
          <van-image
              width="150rpx"
              height="100rpx"
              fit="contain"
              :src="picture(data.pictureId)"
          />
          <van-button type="primary" @tap="uploadBtn" class="up">上传</van-button>
        </view>
      </van-cell>

      <van-field
          :value="data.addressName"
          placeholder="点击选择地址"
          @tap="chooseLocation"
          @change="onChangeAddress"
          autosize
          type="textarea"
          label="地址"
      />

      <van-field
          :value="data.introduce"
          placeholder="请输入商品简介"
          @change="onChangeIntroduce"
          autosize
          type="textarea"
          label="简介"
      />

    </view>

    <view class="a"></view>

    <van-button class="btn" round block type="primary" @tap="uploadInfo">上传</van-button>

  </view>

</template>

<script setup>
import {onBeforeMount, reactive, ref} from "vue";
import commonConfig from "../../../wxcomponents/config/commonConfig";

const data = reactive({
  goodsName: '',
  price: '',
  introduce: '',
  addressName: '',
  address: '',
  num: 1,
  category: '',
  showPicker: false,
  pictureId: '',
  columns: ['办公用品', '服饰鞋帽', '书籍', '美妆个护', '家具', '生活用品', '数码', '食品', '电器', '其他']
})
const showPic = ref(false)

function picture(pictureId){
  if(pictureId.length === 0){
    return "https://img.yzcdn.cn/vant/custom-empty-image.png";
  }
  return commonConfig.baseUrl + "/grid?pictureId="+pictureId;
}

function uploadInfo(){
  let userName = uni.getStorageSync('userinfo').nickname;
  let openid = uni.getStorageSync('openid');

  if(!data.goodsName || !data.category || !data.addressName || !data.price || !data.num){
    uni.showToast({
      title: '输入不能为空',
      icon: 'error'
    })
  } else {
    uni.request({
      method: "POST",
      url: "/goods",
      data: {
        ...data,
        userName,
        openid
      },
      success:function (res){
        if(res.data === 'insert success'){
          uni.showToast({
            title: "上传成功",
            icon: "success"
          })
          data.goodsName = ''
          data.price = ''
          data.introduce = ''
          data.addressName = ''
          data.address = ''
          data.num = 1
          data.category = ''
          data.pictureId = ''
          console.log(data)
        }

      }
    })
  }


}

function chooseLocation(){
  uni.chooseLocation({
    success:function (res){
      data.address = res.address;
      data.addressName = res.name
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
          data.pictureId = res.data
        }
      });
    }
  });
}


function onClickVar() {
  data.showPicker = true
}

function onConfirm(event) {
  data.category = event.detail.value;
  data.showPicker = false;
}

function onChangeName(event) {
  data.goodsName = event.detail
}

function onChangePrice(event) {
  data.price = event.detail
}

function onChangeIntroduce(event) {
  data.introduce = event.detail
}

function onChangeNum(event) {
  data.num = event.detail
}

function onChangeAddress(event) {
  data.address = event.detail
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

</style>