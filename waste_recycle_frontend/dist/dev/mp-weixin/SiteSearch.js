"use strict";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  (common_vendor.unref(NearSiteInfo) + common_vendor.unref(RecommendSite))();
}
const NearSiteInfo = () => "./pages/homepage/components/siteSearch/NearSiteInfo.js";
const RecommendSite = () => "./pages/homepage/components/siteSearch/RecommendSite.js";
const _sfc_main = {
  __name: "SiteSearch",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/siteSearch/SiteSearch.vue"]]);
exports.Component = Component;
