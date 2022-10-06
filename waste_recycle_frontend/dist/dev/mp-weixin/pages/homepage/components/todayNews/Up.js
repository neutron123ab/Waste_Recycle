"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "Up",
  setup(__props) {
    const upInfo = common_vendor.reactive([
      {
        bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/1.png",
        smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/11.png",
        title: "\u5373\u65F6\u901A\u8BAF",
        time: "5\u5206\u949F\u524D"
      },
      {
        bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/2.png",
        smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/22.png",
        title: "\u5373\u65F6\u901A\u8BAF",
        time: "15\u5206\u949F\u524D"
      },
      {
        bigImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/3.png",
        smallImage: "https://wasterecycle.xyz/images/waste_recycle/homepage/33.png",
        title: "\u5373\u65F6\u901A\u8BAF",
        time: "5\u5206\u949F\u524D"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(upInfo, (item, k0, i0) => {
          return {
            a: item.bigImage,
            b: item.smallImage,
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.time)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-729b55b2"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/todayNews/Up.vue"]]);
wx.createComponent(Component);
