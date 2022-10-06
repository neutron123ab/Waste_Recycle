"use strict";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  (common_vendor.unref(PageHead) + common_vendor.unref(ClassifyBtn))();
}
const ClassifyBtn = () => "./pages/homepage/components/common/ClassifyBtn.js";
const PageHead = () => "./pages/homepage/components/common/PageHead.js";
const _sfc_main = {
  __name: "homepage",
  setup(__props) {
    common_vendor.reactive({ num: 0 });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/homepage.vue"]]);
exports.Component = Component;
