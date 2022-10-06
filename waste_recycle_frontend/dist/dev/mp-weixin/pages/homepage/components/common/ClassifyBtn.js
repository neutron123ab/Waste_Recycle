"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_flea_market = common_vendor.resolveComponent("flea-market");
  const _component_plat_form = common_vendor.resolveComponent("plat-form");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_flea_market + _component_plat_form + _component_van_tabs)();
}
if (!Math) {
  common_vendor.unref(SiteSearch)();
}
const SiteSearch = () => "../siteSearch/SiteSearch.js";
const _sfc_main = {
  __name: "ClassifyBtn",
  setup(__props) {
    common_vendor.ref(["\u7AD9\u70B9\u67E5\u627E", "\u4ECA\u65E5\u8D44\u8BAF", "\u8DF3\u86A4\u5E02\u573A", "\u8DF3\u86A4\u5E73\u53F0"]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          to: "/siteSearch"
        }),
        b: common_vendor.p({
          title: "\u7AD9\u70B9\u67E5\u627E"
        }),
        c: common_vendor.p({
          to: "/fleaMarket"
        }),
        d: common_vendor.p({
          title: "\u8DF3\u86A4\u5E02\u573A"
        }),
        e: common_vendor.p({
          to: "/platform"
        }),
        f: common_vendor.p({
          title: "\u8DF3\u86A4\u5E73\u53F0"
        }),
        g: common_vendor.p({
          sticky: true,
          color: "#AEF516",
          lineWidth: "100rpx"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-822e14a0"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/common/ClassifyBtn.vue"]]);
wx.createComponent(Component);
