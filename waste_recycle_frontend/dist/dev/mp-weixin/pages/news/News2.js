"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_slider = common_vendor.resolveComponent("van-slider");
  const _component_van_action_sheet = common_vendor.resolveComponent("van-action-sheet");
  (_component_van_nav_bar + _component_van_slider + _component_van_action_sheet)();
}
const _sfc_main = {
  __name: "News2",
  setup(__props) {
    function onClickLeft() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    const newsData = common_vendor.reactive({
      title: "\u4E60\u8FD1\u5E73\u5728\u91D1\u7816\u56FD\u5BB6\u9886\u5BFC\u4EBA\u7B2C\u5341\u4E09\u6B21\u4F1A\u6664\u4E0A\u7684\u8BB2\u8BDD",
      image: "https://wasterecycle.xyz/images/waste_recycle/news2/news2.png",
      summary: "\u4E60\u8FD1\u5E73\uFF1A\u6211\u4EEC\u5C06\u6269\u5927\u5408\u4F5C\u7A7A\u95F4\uFF0C\u52A0\u5927\u5BF9\u5171\u5EFA\u201C\u4E00\u5E26\u4E00\u8DEF\u201D\u56FD\u5BB6\u670D\u52A1\u4E1A\u53D1\u5C55\u7684\u652F\u6301\uFF0C\u540C\u4E16\u754C\u5171\u4EAB\u4E2D\u56FD\u6280\u672F\u53D1\u5C55\u6210\u679C\u3002",
      content: [
        "\u5F53\u524D\uFF0C\u65B0\u51A0\u80BA\u708E\u75AB\u60C5\u4ECD\u5728\u5168\u7403\u8086\u8650\uFF0C\u4E16\u754C\u7ECF\u6D4E\u590D\u82CF\u8270\u96BE\u66F2\u6298\uFF0C\u56FD\u9645\u79E9\u5E8F\u6F14\u53D8\u6DF1\u523B\u590D\u6742\u3002\u9762\u5BF9\u6311\u6218\uFF0C\u91D1\u7816\u56FD\u5BB6\u8981\u5C55\u73B0\u62C5\u5F53\uFF0C\u4E3A\u4E16\u754C\u548C\u5E73\u4E0E\u53D1\u5C55\u4F5C\u51FA\u79EF\u6781\u8D21\u732E\uFF0C\u63A8\u52A8\u6784\u5EFA\u4EBA\u7C7B\u547D\u8FD0\u5171\u540C\u4F53\u3002",
        "\u2014\u2014\u6211\u4EEC\u8981\u63A8\u52A8\u8DF5\u884C\u771F\u6B63\u7684\u591A\u8FB9\u4E3B\u4E49\uFF0C\u606A\u5B88\u8054\u5408\u56FD\u5BAA\u7AE0\u5B97\u65E8\u548C\u539F\u5219\uFF0C\u7EF4\u62A4\u4EE5\u8054\u5408\u56FD\u4E3A\u6838\u5FC3\u7684\u56FD\u9645\u4F53\u7CFB\u548C\u4EE5\u56FD\u9645\u6CD5\u4E3A\u57FA\u7840\u7684\u56FD\u9645\u79E9\u5E8F\u3002",
        "\u2014\u2014\u6211\u4EEC\u8981\u63A8\u52A8\u5168\u7403\u56E2\u7ED3\u6297\u75AB\uFF0C\u643A\u624B\u5E94\u5BF9\u75AB\u60C5\uFF0C\u575A\u6301\u79D1\u5B66\u6EAF\u6E90\uFF0C\u53CD\u5BF9\u653F\u6CBB\u5316\u3001\u6C61\u540D\u5316\uFF0C\u52A0\u5F3A\u8054\u9632\u8054\u63A7\uFF0C\u4FC3\u8FDB\u75AB\u82D7\u4F5C\u4E3A\u5168\u7403\u516C\u5171\u4EA7\u54C1\u7684\u7814\u53D1\u3001\u751F\u4EA7\u3001\u516C\u5E73\u5206\u914D\u3002",
        "\u2014\u2014\u6211\u4EEC\u8981\u63A8\u52A8\u5F00\u653E\u521B\u65B0\u589E\u957F\uFF0C\u52A9\u529B\u4E16\u754C\u7ECF\u6D4E\u5E73\u7A33\u590D\u82CF\uFF0C\u7EF4\u62A4\u5C55\u52A1\u5B9E\u5408\u4F5C\uFF0C\u63A8\u52A8\u91D1\u7816\u56FD\u5BB6\u75AB\u82D7\u7814\u53D1\u4E2D\u5FC3\u5728\u7EBF\u4E0A\u5C3D\u5FEB\u542F\u52A8\u3002\u8981\u52A0\u5F3A\u4F20\u7EDF\u533B\u836F\u5408\u4F5C\uFF0C\u4E3A\u6297\u51FB\u75AB\u60C5\u63D0\u4F9B\u66F4\u591A\u624B\u6BB5\u3002",
        "\u6211\u4EEC\u5E94\u8BE5\u575A\u51B3\u7EF4\u62A4\u8054\u5408\u56FD\u6743\u5A01\u548C\u5730\u4F4D\uFF0C\u5171\u540C\u8DF5\u884C\u771F\u6B63\u7684\u591A\u8FB9\u4E3B\u4E49\u3002\u63A8\u52A8\u6784\u5EFA\u4EBA\u7C7B\u547D\u8FD0\u5171\u540C\u4F53\uFF0C\u9700\u8981\u4E00\u4E2A\u5F3A\u6709\u529B\u7684\u8054\u5408\u56FD\uFF0C\u9700\u8981\u6539\u9769\u548C\u5EFA\u8BBE\u5168\u7403\u6CBB\u7406\u4F53\u7CFB\u3002\u4E16\u754C\u5404\u56FD\u5E94\u8BE5\u7EF4\u62A4\u4EE5\u8054\u5408\u56FD\u4E3A\u6838\u5FC3\u7684\u56FD\u9645\u4F53\u7CFB\u3001\u4EE5\u56FD\u9645\u6CD5\u4E3A\u57FA\u7840\u7684\u56FD\u9645\u79E9\u5E8F\u3001\u4EE5\u8054\u5408\u56FD\u5BAA\u7AE0\u5B97\u65E8\u548C\u539F\u5219\u4E3A\u57FA\u7840\u7684\u56FD\u9645\u5173\u7CFB\u57FA\u672C\u51C6\u5219\u3002\u56FD\u9645\u89C4\u5219\u53EA\u80FD\u7531\u8054\u5408\u56FD193\u4E2A\u4F1A\u5458\u56FD\u5171\u540C\u5236\u5B9A\uFF0C\u4E0D\u80FD\u7531\u4E2A\u522B\u56FD\u5BB6\u548C\u56FD\u5BB6\u96C6\u56E2\u6765\u51B3\u5B9A\u3002\u56FD\u9645\u89C4\u5219\u5E94\u8BE5\u7531\u8054\u5408\u56FD193\u4E2A\u4F1A\u5458\u56FD\u5171\u540C\u9075\u5B88\uFF0C\u6CA1\u6709\u4E5F\u4E0D\u5E94\u8BE5\u6709\u4F8B\u5916\u3002\u5BF9\u8054\u5408\u56FD\uFF0C\u4E16\u754C\u5404\u56FD\u90FD\u5E94\u8BE5\u79C9\u6301\u5C0A\u91CD\u7684\u6001\u5EA6\uFF0C\u7231\u62A4\u597D\u3001\u5B88\u62A4\u597D\u8FD9\u4E2A\u5927\u5BB6\u5EAD\uFF0C\u51B3\u4E0D\u80FD\u5408\u5219\u5229\u7528\u3001\u4E0D\u5408\u5219\u5F03\u4E4B\uFF0C\u8BA9\u8054\u5408\u56FD\u5728\u4FC3\u8FDB\u4EBA\u7C7B\u548C\u5E73\u4E0E\u53D1\u5C55\u7684\u5D07\u9AD8\u4E8B\u4E1A\u4E2D\u53D1\u6325\u66F4\u4E3A\u79EF\u6781\u7684\u4F5C\u7528\u3002\u4E2D\u56FD\u613F\u540C\u5404\u56FD\u79C9\u6301\u5171\u5546\u5171\u5EFA\u5171\u4EAB\u7406\u5FF5\uFF0C\u63A2\u7D22\u5408\u4F5C\u601D\u8DEF\uFF0C\u521B\u65B0\u5408\u4F5C\u6A21\u5F0F\uFF0C\u4E0D\u65AD\u4E30\u5BCC\u65B0\u5F62\u52BF\u4E0B\u591A\u8FB9\u4E3B\u4E49\u5B9E\u8DF5\u3002"
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
    function onClose() {
      newsData.showModal = false;
    }
    function pop(event) {
      newsData.showModal = true;
    }
    function selectColor1(event) {
      newsData.selectColorIndex = 1;
      newsData.backgroundColor = "#FFFFFF";
      newsData.fontColor = "#26262E";
    }
    function selectColor2(event) {
      newsData.selectColorIndex = 2;
      newsData.backgroundColor = "#FFF5D6";
      newsData.fontColor = "#26262E";
    }
    function selectColor3(event) {
      newsData.selectColorIndex = 3;
      newsData.backgroundColor = "#1e2039";
      newsData.fontColor = "#ffffff";
    }
    function selectWeight1(event) {
      newsData.selectWeightIndex = 1;
      newsData.fontWeight = "normal";
    }
    function selectWeight2(event) {
      newsData.selectWeightIndex = 2;
      newsData.fontWeight = "bold";
    }
    function selectWeight3(event) {
      newsData.selectWeightIndex = 3;
      newsData.fontWeight = "1000";
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "\u4ECA\u65E5\u770B\u70B9",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        c: common_vendor.t(newsData.title),
        d: newsData.image,
        e: common_vendor.t(newsData.summary),
        f: newsData.fontSize + "rpx",
        g: newsData.lineHeight * 1.5 + "rpx",
        h: common_vendor.f(newsData.content, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        i: newsData.fontSize + "rpx",
        j: newsData.lineHeight * 1.5 + "rpx",
        k: common_vendor.o(pop),
        l: newsData.selectColorIndex === 1
      }, newsData.selectColorIndex === 1 ? {} : {}, {
        m: newsData.selectColorIndex === 1
      }, newsData.selectColorIndex === 1 ? {} : {}, {
        n: common_vendor.o(selectColor1),
        o: newsData.selectColorIndex === 2
      }, newsData.selectColorIndex === 2 ? {} : {}, {
        p: newsData.selectColorIndex === 2
      }, newsData.selectColorIndex === 2 ? {} : {}, {
        q: common_vendor.o(selectColor2),
        r: newsData.selectColorIndex === 3
      }, newsData.selectColorIndex === 3 ? {} : {}, {
        s: newsData.selectColorIndex === 3
      }, newsData.selectColorIndex === 3 ? {} : {}, {
        t: common_vendor.o(selectColor3),
        v: newsData.selectWeightIndex === 1
      }, newsData.selectWeightIndex === 1 ? {} : {}, {
        w: newsData.selectWeightIndex === 1
      }, newsData.selectWeightIndex === 1 ? {} : {}, {
        x: common_vendor.o(selectWeight1),
        y: newsData.selectWeightIndex === 2
      }, newsData.selectWeightIndex === 2 ? {} : {}, {
        z: newsData.selectWeightIndex === 2
      }, newsData.selectWeightIndex === 2 ? {} : {}, {
        A: common_vendor.o(selectWeight2),
        B: newsData.selectWeightIndex === 3
      }, newsData.selectWeightIndex === 3 ? {} : {}, {
        C: newsData.selectWeightIndex === 3
      }, newsData.selectWeightIndex === 3 ? {} : {}, {
        D: common_vendor.o(selectWeight3),
        E: common_vendor.p({
          value: "50",
          barHeight: "7rpx",
          activeColor: "#1aad19"
        }),
        F: common_vendor.o(onClose),
        G: common_vendor.p({
          show: newsData.showModal,
          title: "\u8C03\u6574\u5B57\u4F53\u5927\u5C0F\u548C\u80CC\u666F\u989C\u8272"
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7dec9567"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/news/News2.vue"]]);
wx.createPage(MiniProgramPage);
