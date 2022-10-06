"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "NearSiteInfo",
  setup(__props) {
    const nearSiteInfo = common_vendor.reactive([
      {
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/image1.png",
        title: "\u201C\u5FEB\u6613\u597D\u201D\u56DE\u6536\u7AD9",
        distance: "2.6km",
        time: "30\u5206\u949F",
        comment: ["\u56DE\u6536\u4EF7\u9AD8", "\u56DE\u6536\u6548\u7387\u9AD8", "\u652F\u6301\u4E0A\u95E8", "\u56DE\u9988\u6D3B\u52A8"],
        grade: "4.8",
        likeNum: "(999+)"
      },
      {
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/image2.png",
        title: "xxx\u56DE\u6536\u7AD9",
        distance: "2.6km",
        time: "30\u5206\u949F",
        comment: ["\u56DE\u6536\u4EF7\u9AD8", "\u56DE\u6536\u6548\u7387\u9AD8", "\u652F\u6301\u4E0A\u95E8", "\u56DE\u9988\u6D3B\u52A8"],
        grade: "4.8",
        likeNum: "(999+)"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(nearSiteInfo, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.grade),
            c: common_vendor.t(item.likeNum),
            d: common_vendor.t(item.title),
            e: common_vendor.t(item.distance),
            f: common_vendor.t(item.time),
            g: common_vendor.f(item.comment, (i, k1, i1) => {
              return {
                a: common_vendor.t(i)
              };
            })
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6d5c709e"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/siteSearch/NearSiteInfo.vue"]]);
wx.createComponent(Component);
