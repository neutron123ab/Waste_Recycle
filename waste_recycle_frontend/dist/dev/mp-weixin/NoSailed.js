"use strict";
var common_vendor = require("./common/vendor.js");
var wxcomponents_config_commonConfig = require("./wxcomponents/config/commonConfig.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_cell = common_vendor.resolveComponent("van-cell");
  (_component_van_field + _component_van_stepper + _component_van_picker + _component_van_popup + _component_van_image + _component_van_button + _component_van_cell)();
}
const _sfc_main = {
  __name: "NoSailed",
  setup(__props) {
    const data = common_vendor.reactive({
      goodsName: "",
      price: "",
      introduce: "",
      addressName: "",
      address: "",
      num: 1,
      category: "",
      showPicker: false,
      pictureId: "",
      columns: ["\u529E\u516C\u7528\u54C1", "\u670D\u9970\u978B\u5E3D", "\u4E66\u7C4D", "\u7F8E\u5986\u4E2A\u62A4", "\u5BB6\u5177", "\u751F\u6D3B\u7528\u54C1", "\u6570\u7801", "\u98DF\u54C1", "\u7535\u5668", "\u5176\u4ED6"]
    });
    common_vendor.ref(false);
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function uploadInfo() {
      let userName = common_vendor.index.getStorageSync("userinfo").nickname;
      let openid = common_vendor.index.getStorageSync("openid");
      if (!data.goodsName || !data.category || !data.addressName || !data.price || !data.num) {
        common_vendor.index.showToast({
          title: "\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "error"
        });
      } else {
        common_vendor.index.request({
          method: "POST",
          url: "/goods",
          data: {
            ...data,
            userName,
            openid
          },
          success: function(res) {
            if (res.data === "insert success") {
              common_vendor.index.showToast({
                title: "\u4E0A\u4F20\u6210\u529F",
                icon: "success"
              });
              data.goodsName = "";
              data.price = "";
              data.introduce = "";
              data.addressName = "";
              data.address = "";
              data.num = 1;
              data.category = "";
              data.pictureId = "";
              console.log(data);
            }
          }
        });
      }
    }
    function chooseLocation() {
      common_vendor.index.chooseLocation({
        success: function(res) {
          data.address = res.address;
          data.addressName = res.name;
        }
      });
    }
    function uploadBtn() {
      common_vendor.index.chooseImage({
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          chooseImageRes.tempFiles;
          common_vendor.index.uploadFile({
            url: "/grid",
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              "user": "test"
            },
            success: (res) => {
              data.pictureId = res.data;
            }
          });
        }
      });
    }
    function onClickVar() {
      data.showPicker = true;
    }
    function onConfirm(event) {
      data.category = event.detail.value;
      data.showPicker = false;
    }
    function onChangeName(event) {
      data.goodsName = event.detail;
    }
    function onChangePrice(event) {
      data.price = event.detail;
    }
    function onChangeIntroduce(event) {
      data.introduce = event.detail;
    }
    function onChangeNum(event) {
      data.num = event.detail;
    }
    function onChangeAddress(event) {
      data.address = event.detail;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onChangeName),
        b: common_vendor.p({
          value: data.goodsName,
          placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D",
          label: "\u5546\u54C1\u540D"
        }),
        c: common_vendor.o(onChangePrice),
        d: common_vendor.p({
          value: data.price,
          placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C",
          label: "\u5355\u4EF7"
        }),
        e: common_vendor.o(onChangeNum),
        f: common_vendor.p({
          value: data.num
        }),
        g: common_vendor.p({
          name: "stepper",
          label: "\u6570\u91CF"
        }),
        h: common_vendor.o(onClickVar),
        i: common_vendor.p({
          value: data.category,
          isLink: true,
          readonly: true,
          name: "picker",
          label: "\u5546\u54C1\u7C7B\u578B",
          placeholder: "\u70B9\u51FB\u9009\u62E9\u7C7B\u522B"
        }),
        j: common_vendor.o(onConfirm),
        k: common_vendor.o(($event) => data.showPicker = false),
        l: common_vendor.p({
          showToolbar: "true",
          columns: data.columns
        }),
        m: common_vendor.p({
          show: data.showPicker,
          position: "bottom"
        }),
        n: common_vendor.p({
          width: "150rpx",
          height: "100rpx",
          fit: "contain",
          src: picture(data.pictureId)
        }),
        o: common_vendor.o(uploadBtn),
        p: common_vendor.p({
          type: "primary"
        }),
        q: common_vendor.p({
          title: "\u5546\u54C1\u56FE\u7247",
          useLabelSlot: true,
          titleStyle: "color: #646566"
        }),
        r: common_vendor.o(chooseLocation),
        s: common_vendor.o(onChangeAddress),
        t: common_vendor.p({
          value: data.addressName,
          placeholder: "\u70B9\u51FB\u9009\u62E9\u5730\u5740",
          autosize: true,
          type: "textarea",
          label: "\u5730\u5740"
        }),
        v: common_vendor.o(onChangeIntroduce),
        w: common_vendor.p({
          value: data.introduce,
          placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u7B80\u4ECB",
          autosize: true,
          type: "textarea",
          label: "\u7B80\u4ECB"
        }),
        x: common_vendor.o(uploadInfo),
        y: common_vendor.p({
          round: true,
          block: true,
          type: "primary"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/manage/components/NoSailed.vue"]]);
exports.Component = Component;
