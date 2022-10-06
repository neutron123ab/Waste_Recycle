"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  _component_van_nav_bar();
}
const _sfc_main = {
  __name: "News1",
  setup(__props) {
    function onClickLeft() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    const newsData = common_vendor.reactive({
      bigImage: "https://wasterecycle.xyz/images/waste_recycle/news1/news1.png",
      smallImage: "https://wasterecycle.xyz/images/waste_recycle/news1/news1_icon1.png",
      from: "\u5373\u65F6\u901A\u8BAF",
      time: "50\u5206\u949F\u524D",
      readNum: "999\u4EBA\u9605\u8BFB",
      title: "\u57282021\u5E74\u4E2D\u56FD\u56FD\u9645\u670D\u52A1\u8D38\u6613\u4EA4\u6613\u4F1A\u5168\u7403\u670D\u52A1\u8D38\u6613\u5CF0\u4F1A\u4E0A\u7684\u81F4\u8F9E",
      head: "9\u67082\u65E5\u665A\uFF0C\u56FD\u5BB6\u4E3B\u5E2D\u4E60\u8FD1\u5E73\u57282021\u5E74\u4E2D\u56FD\u56FD\u9645\u670D\u52A1\u8D38\u6613\u4EA4\u6613\u4F1A\u5168\u7403\u670D\u52A1\u8D38\u6613\u5CF0\u4F1A\u4E0A\u53D1\u8868\u89C6\u9891\u81F4\u8F9E",
      welcome: "\u5C0A\u656C\u7684\u5404\u4F4D\u6765\u5BBE\uFF0C\u5973\u58EB\u4EEC\uFF0C\u5148\u751F\u4EEC\uFF0C\u670B\u53CB\u4EEC\uFF1A",
      content: [
        "\u5927\u5BB6\u597D\uFF01\u6211\u8C28\u4EE3\u8868\u4E2D\u56FD\u653F\u5E9C\u548C\u4E2D\u56FD\u4EBA\u6C11\uFF0C\u5E76\u4EE5\u6211\u4E2A\u4EBA\u540D\u4E49\uFF0C\u5411\u53C2\u52A02021\u5E74\u4E2D\u56FD\u56FD\u9645\u670D\u52A1\u8D38\u6613\u4EA4\u6613\u4F1A\u7684\u6240\u6709\u5609\u5BBE\uFF0C\u8868\u793A\u70ED\u70C8\u7684\u6B22\u8FCE\u548C\u8BDA\u631A\u7684\u95EE\u5019\uFF01",
        "\u672C\u5C4A\u670D\u8D38\u4F1A\u4EE5\u201C\u6570\u5B57\u5F00\u542F\u672A\u6765\uFF0C\u670D\u52A1\u4FC3\u8FDB\u53D1\u5C55\u201D\u4E3A\u4E3B\u9898\uFF0C\u76F8\u4FE1\u5728\u5404\u65B9\u79EF\u6781\u53C2\u4E0E\u4E0B\uFF0C\u5C06\u6210\u4E3A\u4E00\u5C4A\u7279\u8272\u9C9C\u660E\u3001\u5BCC\u6709\u6210\u6548\u7684\u76DB\u4F1A\u3002",
        "\u670D\u52A1\u8D38\u6613\u662F\u56FD\u9645\u8D38\u6613\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u548C\u56FD\u9645\u7ECF\u8D38\u5408\u4F5C\u7684\u91CD\u8981\u9886\u57DF\uFF0C\u5728\u6784\u5EFA\u65B0\u53D1\u5C55\u683C\u5C40\u4E2D\u5177\u6709\u91CD\u8981\u4F5C\u7528\u3002\u6211\u4EEC\u613F\u540C\u5404\u65B9\u4E00\u9053\uFF0C\u575A\u6301\u5F00\u653E\u5408\u4F5C\u3001\u4E92\u5229\u5171\u8D62\uFF0C\u5171\u4EAB\u670D\u52A1\u8D38\u6613\u53D1\u5C55\u673A\u9047\uFF0C\u5171\u4FC3\u4E16\u754C\u4E16\u754C\u7ECF\u6D4E\u590D\u82CF\u548C\u589E\u957F\u3002",
        "\u6211\u4EEC\u5C06\u63D0\u9AD8\u5F00\u653E\u6C34\u5E73\uFF0C\u5728\u5168\u56FD\u63A8\u8FDB\u5B9E\u65BD\u8DE8\u5883\u670D\u52A1\u8D38\u6613\u8D1F\u9762\u6E05\u5355\uFF0C\u63A2\u7D22\u5EFA\u8BBE\u56FD\u5BB6\u670D\u52A1\u8D38\u6613\u521B\u65B0\u53D1\u5C55\u793A\u8303\u533A\uFF1B\u6211\u4EEC\u5C06\u6269\u5927\u5408\u4F5C\u7A7A\u95F4\uFF0C\u52A0\u5927\u5BF9\u5171\u5EFA\u201C\u4E00\u5E26\u4E00\u8DEF\u201D\u56FD\u5BB6\u670D\u52A1\u4E1A\u53D1\u5C55\u7684\u652F\u6301\uFF0C\u540C\u4E16\u754C\u5171\u4EAB\u4E2D\u56FD\u6280\u672F\u53D1\u5C55\u6210\u679C\uFF1B\u6211\u4EEC\u5C06\u52A0\u5F3A\u670D\u52A1\u9886\u57DF\u89C4\u5219\u5EFA\u8BBE\uFF0C\u652F\u6301\u5317\u4EAC\u7B49\u5730\u5F00\u5C55\u56FD\u9645\u9AD8\u6C34\u5E73\u81EA\u7531\u8D38\u6613\u534F\u5B9A\u89C4\u5219\u5BF9\u63A5\u5148\u884C\u5148\u8BD5\uFF0C\u6253\u9020\u6570\u5B57\u8D38\u6613\u793A\u8303\u533A\uFF1B\u6211\u4EEC\u5C06\u7EE7\u7EED\u652F\u6301\u4E2D\u5C0F\u4F01\u4E1A\u521B\u65B0\u53D1\u5C55\uFF0C\u6DF1\u5316\u65B0\u4E09\u677F\u6539\u9769\uFF0C\u8BBE\u7ACB\u5317\u4EAC\u8BC1\u5238\u4EA4\u6613\u6240\uFF0C\u6253\u9020\u670D\u52A1\u521B\u65B0\u578B\u4E2D\u5C0F\u4F01\u4E1A\u4E3B\u9635\u5730\u3002",
        "\u5973\u58EB\u4EEC\u3001\u5148\u751F\u4EEC\u3001\u670B\u53CB\u4EEC\uFF01",
        "\u8BA9\u6211\u4EEC\u643A\u624B\u6297\u75AB\u3001\u5171\u514B\u65F6\u8270\uFF0C\u575A\u6301\u7528\u548C\u5E73\u3001\u53D1\u5C55\u3001\u5408\u4F5C\u3001\u5171\u8D62\u7684\u201C\u91D1\u94A5\u5319\u201D\uFF0C\u7834\u89E3\u5F53\u524D\u4E16\u754C\u7ECF\u6D4E\u3001\u56FD\u9645\u8D38\u6613\u548C\u6295\u8D44\u9762\u4E34\u7684\u95EE\u9898\uFF0C\u5171\u521B\u66F4\u52A0\u7F8E\u597D\u7684\u672A\u6765\uFF01",
        "\u8C22\u8C22\u5927\u5BB6\u3002"
      ],
      showModal: false,
      fontSize: 26,
      lineHeight: 40,
      selectColorIndex: 1,
      selectWeightIndex: 1,
      backgroundColor: "#FFFFFF",
      fontColor: "#26262E",
      fontWeight: "normal"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "\u4ECA\u65E5\u770B\u70B9",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        c: newsData.bigImage,
        d: common_vendor.t(newsData.from),
        e: common_vendor.t(newsData.time),
        f: common_vendor.t(newsData.title),
        g: newsData.smallImage,
        h: common_vendor.t(newsData.from),
        i: common_vendor.t(newsData.time),
        j: common_vendor.t(newsData.readNum),
        k: common_vendor.t(newsData.head),
        l: common_vendor.t(newsData.welcome),
        m: common_vendor.f(newsData.content, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7dde7de6"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/news/News1.vue"]]);
wx.createPage(MiniProgramPage);
