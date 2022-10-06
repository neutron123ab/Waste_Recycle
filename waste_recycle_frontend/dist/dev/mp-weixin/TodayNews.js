"use strict";
var common_vendor = require("./common/vendor.js");
const Up = () => "./pages/homepage/components/todayNews/Up.js";
const Down = () => "./pages/homepage/components/todayNews/Down.js";
const _sfc_main = {
  name: "TodayNews",
  components: { Down, Up }
};
if (!Array) {
  const _component_Up = common_vendor.resolveComponent("Up");
  const _component_Down = common_vendor.resolveComponent("Down");
  (_component_Up + _component_Down)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/todayNews/TodayNews.vue"]]);
exports.Component = Component;
