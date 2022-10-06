"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "PlatformDown",
  setup(__props) {
    const recData = common_vendor.reactive([
      {
        grade: "4.8",
        title: "tang\u81E3\u4E8C\u54C1",
        comment: "\u9644\u8FD1\u4EA4\u6613\u4EBA\u6570\u6700\u591A",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang2.png"
      },
      {
        grade: "4.9",
        title: "tang\u81E3\u4E09\u54C1",
        comment: "\u9644\u8FD1\u56DE\u9009\u7387\u6700\u9AD8",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang3.png"
      },
      {
        grade: "4.8",
        title: "tang\u81E3\u56DB\u54C1",
        comment: "\u8BC4\u4EF7\u8F83\u597D\uFF0C\u8DDD\u79BB\u8F83\u8FDC",
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/sTang4.png"
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
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1e2f3536"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/platform/PlatformDown.vue"]]);
wx.createComponent(Component);
