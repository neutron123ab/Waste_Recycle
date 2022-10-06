"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "RecommendSite",
  setup(__props) {
    const recData = common_vendor.reactive([
      {
        grade: "4.8",
        title: "\u201C\u5FEB\u6613\u597D\u201D\u56DE\u6536\u7AD9",
        comment: "\u9644\u8FD1\u6700\u5FEB\u7AD9\u70B9",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/recImage1.png"
      },
      {
        grade: "4.9",
        title: "\u201C\u798F\u6C14\u5230\u201D\u56DE\u6536\u7AD9",
        comment: "\u8FD1\u671F\u4F18\u9009\u7AD9\u70B9",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/recImage2.png"
      },
      {
        grade: "4.8",
        title: "\u201C\u6613\u6E05\u6D01\u201D\u56DE\u6536\u7AD9",
        comment: "\u8FD1\u671F\u4F18\u9009\u7AD9\u70B9",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/recImage2.png"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(recData, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.grade),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.comment)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f891bff"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/siteSearch/RecommendSite.vue"]]);
wx.createComponent(Component);
