"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "Down",
  setup(__props) {
    const downInfo = common_vendor.reactive([
      {
        id: 0,
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/44.png",
        title: "# 5G\u65F6\u4EE3",
        content: "\u57282021\u5E74\u4E2D\u56FD\u56FD\u9645\u670D\u52A1\u8D38\u6613\u4EA4\u6613\u4F1A\u5168\u7403\u670D\u52A1\u8D38\u6613\u5CF0\u4F1A\u4E0A\u7684\u81F4\u8F9E",
        from: "\u5373\u65F6\u901A\u8BAF",
        time: "50\u5206\u949F\u524D",
        jump: "/pages/news/News1"
      },
      {
        id: 1,
        image: "https://wasterecycle.xyz/images/waste_recycle/homepage/nav5.png",
        title: "# \u5171\u540C\u5BCC\u88D5",
        content: "\u4E60\u8FD1\u5E73\u5728\u91D1\u7816\u56FD\u5BB6\u9886\u5BFC\u4EBA\u7B2C\u5341\u4E09\u6B21\u4F1A\u6664\u4E0A\u7684\u8BB2\u8BDD",
        from: "\u5373\u65F6\u901A\u8BAF",
        time: "50\u5206\u949F\u524D",
        jump: "/pages/news/News2"
      }
    ]);
    function jumpNews(jumpUrl) {
      common_vendor.index.navigateTo({
        url: jumpUrl
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(downInfo, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.from),
            e: common_vendor.t(item.time),
            f: common_vendor.o(($event) => jumpNews(item.jump))
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cb78e70e"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/homepage/components/todayNews/Down.vue"]]);
wx.createComponent(Component);
