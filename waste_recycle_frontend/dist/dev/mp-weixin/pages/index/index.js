"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onBeforeMount(() => {
      common_vendor.index.getStorage({
        key: "openid",
        success: function() {
          common_vendor.index.redirectTo({
            url: "/pages/main/MainPage"
          });
        }
      });
    });
    function onTapJump() {
      common_vendor.index.navigateTo({
        url: "/pages/index/UserInfo"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onTapJump)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
