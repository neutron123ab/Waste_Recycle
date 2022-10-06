"use strict";
var common_vendor = require("./common/vendor.js");
const PlatformUp = () => "./pages/homepage/components/platform/PlatformUp.js";
const PlatformDown = () => "./pages/homepage/components/platform/PlatformDown.js";
const _sfc_main = {
  name: "Platform",
  components: { PlatformDown, PlatformUp }
};
if (!Array) {
  const _component_PlatformUp = common_vendor.resolveComponent("PlatformUp");
  const _component_PlatformDown = common_vendor.resolveComponent("PlatformDown");
  (_component_PlatformUp + _component_PlatformDown)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/platform/Platform.vue"]]);
exports.Component = Component;
