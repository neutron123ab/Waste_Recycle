"use strict";
var common_vendor = require("./common/vendor.js");
if (!Array) {
  const _component_van_action_sheet = common_vendor.resolveComponent("van-action-sheet");
  _component_van_action_sheet();
}
const _sfc_main = {
  __name: "FleaMarket",
  setup(__props) {
    const data = common_vendor.reactive({
      currentValue: 50,
      show: true
    });
    function onClose() {
      data.show = false;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClose),
        b: common_vendor.p({
          show: data.show,
          title: "\u6807\u9898"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae8863f6"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/market/FleaMarket.vue"]]);
exports.Component = Component;
