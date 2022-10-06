"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "PlatformUp",
  setup(__props) {
    const nearSiteInfo = common_vendor.reactive([
      {
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/tang1.jpg",
        title: "tang\u81E3\u4E00\u54C1",
        distance: "0.5km",
        time: "\u4E0A\u53489\u65F6-\u4E0A\u534811\u65F6",
        comment: ["\u4EA4\u6362\u8D28\u91CF\u9AD8", "\u4EA4\u6362\u79CD\u7C7B\u591A", "\u652F\u6301\u4E92\u9A8C", "\u7EBF\u4E0B\u771F\u5B9E"],
        grade: "4.8",
        likeNum: "(999+)"
      },
      {
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/tang2.png",
        title: "tang\u81E3\u4E8C\u54C1",
        distance: "2.6km",
        time: "30\u5206\u949F",
        comment: ["\u4EA4\u6362\u8D28\u91CF\u9AD8", "\u4EA4\u6362\u79CD\u7C7B\u591A", "\u652F\u6301\u4E92\u9A8C", "\u7EBF\u4E0B\u771F\u5B9E"],
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
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f8d0cc4"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/platform/PlatformUp.vue"]]);
wx.createComponent(Component);
