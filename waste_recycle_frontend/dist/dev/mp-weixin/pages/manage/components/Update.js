"use strict";
var common_vendor = require("../../../common/vendor.js");
var wxcomponents_config_commonConfig = require("../../../wxcomponents/config/commonConfig.js");
var pages_store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_cell = common_vendor.resolveComponent("van-cell");
  (_component_van_nav_bar + _component_van_field + _component_van_stepper + _component_van_picker + _component_van_popup + _component_van_image + _component_van_button + _component_van_cell)();
}
const _sfc_main = {
  __name: "Update",
  setup(__props) {
    const data = common_vendor.reactive([]);
    const columns = common_vendor.ref(["\u529E\u516C\u7528\u54C1", "\u670D\u9970\u978B\u5E3D", "\u4E66\u7C4D", "\u7F8E\u5986\u4E2A\u62A4", "\u5BB6\u5177", "\u751F\u6D3B\u7528\u54C1", "\u6570\u7801", "\u98DF\u54C1", "\u7535\u5668", "\u5176\u4ED6"]);
    const num = common_vendor.ref(1);
    common_vendor.onLoad((option) => {
      const item = JSON.parse(decodeURIComponent(option.item));
      data.push(item);
    });
    function onClickLeft() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function uploadInfo() {
      if (!data[0].goodsName || !data[0].category || !data[0].addressName || !data[0].price || num.value === 0) {
        common_vendor.index.showToast({
          title: "\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "error"
        });
      } else {
        common_vendor.index.request({
          method: "PUT",
          url: "/goods",
          data: {
            ...data[0]
          },
          success: function(res) {
            if (res.data === 1) {
              common_vendor.index.showToast({
                title: "\u4FEE\u6539\u6210\u529F",
                icon: "success"
              });
              pages_store_index.store.commit("change", 1);
            }
          }
        });
      }
    }
    function chooseLocation() {
      common_vendor.index.chooseLocation({
        success: function(res) {
          data[0].address = res.address;
          data[0].addressName = res.name;
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
              common_vendor.index.request({
                method: "DELETE",
                url: "/grid?pictureId=" + data[0].pictureId,
                success: function() {
                  data[0].pictureId = res.data;
                }
              });
            }
          });
        }
      });
    }
    function onClickVar() {
      data[0].showPicker = true;
    }
    function onConfirm(event) {
      data[0].category = event.detail.value;
      data[0].showPicker = false;
    }
    function onChangeName(event) {
      data[0].goodsName = event.detail;
    }
    function onChangePrice(event) {
      data[0].price = event.detail;
    }
    function onChangeIntroduce(event) {
      data[0].introduce = event.detail;
    }
    function onChangeNum(event) {
      num.value = event.detail;
    }
    function onChangeAddress(event) {
      data[0].address = event.detail;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "\u4FEE\u6539\u5546\u54C1",
          leftText: "\u8FD4\u56DE",
          rightText: "\u6309\u94AE",
          leftArrow: true
        }),
        c: common_vendor.o(onChangeName),
        d: common_vendor.p({
          value: data[0].goodsName,
          placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D",
          label: "\u5546\u54C1\u540D"
        }),
        e: common_vendor.o(onChangePrice),
        f: common_vendor.p({
          value: data[0].price,
          placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C",
          label: "\u5355\u4EF7"
        }),
        g: common_vendor.o(onChangeNum),
        h: common_vendor.p({
          value: num.value
        }),
        i: common_vendor.p({
          name: "stepper",
          label: "\u6570\u91CF"
        }),
        j: common_vendor.o(onClickVar),
        k: common_vendor.p({
          value: data[0].category,
          isLink: true,
          readonly: true,
          name: "picker",
          label: "\u5546\u54C1\u7C7B\u578B",
          placeholder: "\u70B9\u51FB\u9009\u62E9\u7C7B\u522B"
        }),
        l: common_vendor.o(onConfirm),
        m: common_vendor.o(($event) => data[0].showPicker = false),
        n: common_vendor.p({
          showToolbar: "true",
          columns: columns.value
        }),
        o: common_vendor.p({
          show: data[0].showPicker,
          position: "bottom"
        }),
        p: common_vendor.p({
          width: "150rpx",
          height: "100rpx",
          fit: "contain",
          src: picture(data[0].pictureId)
        }),
        q: common_vendor.o(uploadBtn),
        r: common_vendor.p({
          type: "primary"
        }),
        s: common_vendor.p({
          title: "\u5546\u54C1\u56FE\u7247",
          useLabelSlot: true,
          titleStyle: "color: #646566"
        }),
        t: common_vendor.o(chooseLocation),
        v: common_vendor.o(onChangeAddress),
        w: common_vendor.p({
          value: data[0].addressName,
          placeholder: "\u70B9\u51FB\u9009\u62E9\u5730\u5740",
          autosize: true,
          type: "textarea",
          label: "\u5730\u5740"
        }),
        x: common_vendor.o(onChangeIntroduce),
        y: common_vendor.p({
          value: data[0].introduce,
          placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u7B80\u4ECB",
          autosize: true,
          type: "textarea",
          label: "\u7B80\u4ECB"
        }),
        z: common_vendor.o(uploadInfo),
        A: common_vendor.p({
          round: true,
          block: true,
          type: "primary"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/manage/components/Update.vue"]]);
wx.createPage(MiniProgramPage);
