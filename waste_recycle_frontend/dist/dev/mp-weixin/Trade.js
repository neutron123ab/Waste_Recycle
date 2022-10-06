"use strict";
var common_vendor = require("./common/vendor.js");
var pages_store_index = require("./pages/store/index.js");
var wxcomponents_config_commonConfig = require("./wxcomponents/config/commonConfig.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_sticky = common_vendor.resolveComponent("van-sticky");
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_grid_item = common_vendor.resolveComponent("van-grid-item");
  const _component_van_grid = common_vendor.resolveComponent("van-grid");
  const _component_van_empty = common_vendor.resolveComponent("van-empty");
  const _component_van_tag = common_vendor.resolveComponent("van-tag");
  const _component_van_card = common_vendor.resolveComponent("van-card");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_component_van_nav_bar + _component_van_sticky + _component_van_search + _component_van_grid_item + _component_van_grid + _component_van_empty + _component_van_tag + _component_van_card + _component_van_button)();
}
const _sfc_main = {
  __name: "Trade",
  setup(__props) {
    const rankData = common_vendor.reactive([]);
    common_vendor.onBeforeMount(initRank);
    common_vendor.watch(() => pages_store_index.store.state.rankFlush, (value, oldValue) => {
      if (pages_store_index.store.state.rankFlush === true) {
        initRank();
        pages_store_index.store.state.rankFlush = false;
      }
    });
    function initRank() {
      common_vendor.index.request({
        method: "GET",
        url: "/order/rank",
        success: function(res) {
          let length = res.data.length;
          for (let i = 0; i < length; i++) {
            rankData.pop();
          }
          for (let i = 0; i < length; i++) {
            rankData.push(res.data[i]);
          }
        }
      });
    }
    common_vendor.reactive({
      active: false
    });
    function onTap() {
      common_vendor.index.navigateTo({
        url: "/pages/manage/Manage"
      });
    }
    function introduce(desc) {
      return "\u7B80\u4ECB\uFF1A" + desc;
    }
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function onClickClassify(index) {
      pages_store_index.store.commit("gridIndex", index);
      common_vendor.index.navigateTo({
        url: "/pages/classify/Classify"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u4E8C\u624B\u4EA4\u6613\u5E73\u53F0"
        }),
        b: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args)),
        c: common_vendor.o(_ctx.onChange),
        d: common_vendor.o(_ctx.onSearch),
        e: common_vendor.p({
          placeholder: "\u641C\u7D22\u5546\u54C1",
          shape: "round",
          useActionSlot: true
        }),
        f: common_vendor.o(($event) => onClickClassify(0)),
        g: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "bangongyongpin",
          text: "\u529E\u516C\u7528\u54C1"
        }),
        h: common_vendor.o(($event) => onClickClassify(1)),
        i: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "yifu",
          text: "\u670D\u9970\u978B\u5E3D"
        }),
        j: common_vendor.o(($event) => onClickClassify(2)),
        k: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "shuji",
          text: "\u4E66\u7C4D"
        }),
        l: common_vendor.o(($event) => onClickClassify(3)),
        m: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "kouhong",
          text: "\u7F8E\u5986\u4E2A\u62A4"
        }),
        n: common_vendor.o(($event) => onClickClassify(4)),
        o: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "fangzi",
          text: "\u5BB6\u5177"
        }),
        p: common_vendor.p({
          clickable: true,
          columnNum: "5"
        }),
        q: common_vendor.o(($event) => onClickClassify(5)),
        r: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "-",
          text: "\u751F\u6D3B\u7528\u54C1"
        }),
        s: common_vendor.o(($event) => onClickClassify(6)),
        t: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "xiangji",
          text: "\u6570\u7801"
        }),
        v: common_vendor.o(($event) => onClickClassify(7)),
        w: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "shipin_pisa",
          text: "\u98DF\u54C1"
        }),
        x: common_vendor.o(($event) => onClickClassify(8)),
        y: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "dianqi",
          text: "\u7535\u5668"
        }),
        z: common_vendor.o(($event) => onClickClassify(0)),
        A: common_vendor.p({
          iconPrefix: "t-icon",
          icon: "quanbu",
          text: "\u5168\u90E8\u5206\u7C7B"
        }),
        B: common_vendor.p({
          clickable: true,
          columnNum: "5"
        }),
        C: rankData.length === 0
      }, rankData.length === 0 ? {
        D: common_vendor.p({
          image: "../../../static/no.png",
          description: "\u7A7A\u7A7A\u5982\u4E5F~"
        })
      } : {}, {
        E: rankData.length !== 0
      }, rankData.length !== 0 ? {
        F: common_vendor.f(rankData, (item, index, i0) => {
          return {
            a: common_vendor.t(item.category),
            b: "73d2d185-17-" + i0 + "," + ("73d2d185-16-" + i0),
            c: common_vendor.t(item.sailedNum),
            d: "73d2d185-18-" + i0 + "," + ("73d2d185-16-" + i0),
            e: "73d2d185-16-" + i0,
            f: common_vendor.p({
              tag: index + 1,
              price: item.price,
              title: item.goodsName,
              desc: introduce(item.introduce),
              thumb: picture(item.pictureId),
              thumbMode: "contain"
            })
          };
        }),
        G: common_vendor.p({
          plain: true,
          type: "danger"
        }),
        H: common_vendor.p({
          plain: true,
          type: "danger"
        })
      } : {}, {
        I: common_vendor.o(onTap),
        J: common_vendor.p({
          block: true,
          round: true,
          color: "#ada3ff"
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-73d2d185"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/trade/Trade.vue"]]);
exports.Component = Component;
