"use strict";
var common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "My",
  setup(__props) {
    const myData = common_vendor.reactive({
      userinfo: {
        avatarUrl: "",
        nickname: ""
      },
      menuList: [
        {
          icon: "icon-order",
          text: "\u5168\u90E8\u8BA2\u5355",
          url: ""
        },
        {
          icon: "icon-dizhidingwei",
          text: "\u6211\u7684\u5730\u5740",
          url: ""
        },
        {
          icon: "icon--love",
          text: "\u7AD9\u70B9\u6536\u85CF",
          url: ""
        },
        {
          icon: "icon-Wallet1",
          text: "\u7EA2\u5305\u5361\u5377",
          url: ""
        },
        {
          icon: "icon-remind1",
          text: "\u6D88\u606F\u63D0\u9192",
          url: "icon-locate1e"
        },
        {
          icon: "icon-user",
          text: "\u4E2A\u4EBA\u4E2D\u5FC3",
          url: ""
        },
        {
          icon: "icon-settings2",
          text: "\u5E38\u7528\u8BBE\u7F6E",
          url: ""
        }
      ]
    });
    common_vendor.onBeforeMount(load);
    function load() {
      myData.userinfo = common_vendor.index.getStorageSync("userinfo");
    }
    return (_ctx, _cache) => {
      return {
        a: myData.userinfo.avatarUrl,
        b: common_vendor.t(myData.userinfo.nickname),
        c: common_vendor.f(myData.menuList, (item, k0, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.text)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-120ff4ca"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/My/My.vue"]]);
exports.Component = Component;
