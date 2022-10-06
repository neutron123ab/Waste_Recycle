"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  _component_van_icon();
}
const _sfc_main = {
  __name: "PageHead",
  setup(__props) {
    const search = common_vendor.reactive({
      val: ""
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "arrow-down"
        }),
        b: search.val,
        c: common_vendor.o(($event) => search.val = $event.detail.value),
        d: common_vendor.t(search.val)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2219f247"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/common/PageHead.vue"]]);
wx.createComponent(Component);
