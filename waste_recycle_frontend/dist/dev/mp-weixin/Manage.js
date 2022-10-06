"use strict";
var common_vendor = require("./common/vendor.js");
var pages_store_index = require("./pages/store/index.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_sticky = common_vendor.resolveComponent("van-sticky");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_nav_bar + _component_van_sticky + _component_van_tab + _component_van_tabs)();
}
if (!Math) {
  (common_vendor.unref(NoSailed) + common_vendor.unref(Sailed))();
}
const Sailed = () => "./pages/manage/components/Sailed.js";
const NoSailed = () => "./pages/manage/components/NoSailed.js";
const _sfc_main = {
  __name: "Manage",
  setup(__props) {
    const data = common_vendor.reactive({
      active: 0
    });
    function onClickLeft() {
      pages_store_index.store.commit("rankFlush", true);
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    function onChange(event) {
      data.active = event.detail.index;
      pages_store_index.store.state.active;
      pages_store_index.store.commit("change", data.active);
      console.log(pages_store_index.store.state.active);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "\u51FA\u552E\u7BA1\u7406",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        c: common_vendor.p({
          to: "/noSailed"
        }),
        d: common_vendor.p({
          title: "\u6211\u8981\u51FA\u552E"
        }),
        e: common_vendor.p({
          to: "/sailed"
        }),
        f: common_vendor.p({
          title: "\u5DF2\u51FA\u552E"
        }),
        g: common_vendor.o(onChange),
        h: common_vendor.p({
          active: data.active,
          color: "#b1efd9"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c53f3ca"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/manage/Manage.vue"]]);
exports.Component = Component;
