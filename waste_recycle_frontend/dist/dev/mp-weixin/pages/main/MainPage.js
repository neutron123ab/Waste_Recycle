"use strict";
var common_vendor = require("../../common/vendor.js");
require("../../wxcomponents/vant/dialog/dialog.js");
if (!Array) {
  const _component_home_page = common_vendor.resolveComponent("home-page");
  const _component_trade = common_vendor.resolveComponent("trade");
  const _component_order_list = common_vendor.resolveComponent("order-list");
  const _component_my = common_vendor.resolveComponent("my");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_tabbar_item = common_vendor.resolveComponent("van-tabbar-item");
  const _component_van_tabbar = common_vendor.resolveComponent("van-tabbar");
  (_component_home_page + _component_trade + _component_order_list + _component_my + _component_van_dialog + _component_van_button + _component_van_tabbar_item + _component_van_tabbar)();
}
const _sfc_main = {
  __name: "MainPage",
  setup(__props) {
    const active = common_vendor.reactive({
      num: 0
    });
    function onChange(event) {
      active.num = event.detail;
    }
    function test1() {
      common_vendor.index.showModal({
        title: "\u9000\u51FA\u63D0\u9192",
        content: "\u786E\u8BA4\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",
        success: function(res) {
          if (res.confirm) {
            quit();
          }
        }
      });
    }
    function quit() {
      common_vendor.index.removeStorage({
        key: "userinfo",
        success: function() {
          common_vendor.index.removeStorage({
            key: "openid",
            success: function() {
              common_vendor.index.redirectTo({
                url: "/pages/index/index"
              });
            }
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: active.num === 0
      }, active.num === 0 ? {
        b: common_vendor.p({
          to: "/homepage"
        })
      } : {}, {
        c: active.num === 1
      }, active.num === 1 ? {
        d: common_vendor.p({
          to: "/trade"
        })
      } : {}, {
        e: active.num === 2
      }, active.num === 2 ? {
        f: common_vendor.p({
          to: "/orderList"
        })
      } : {}, {
        g: active.num === 3
      }, active.num === 3 ? {
        h: common_vendor.p({
          to: "/my"
        })
      } : {}, {
        i: active.num === 3
      }, active.num === 3 ? {
        j: common_vendor.p({
          id: "van-dialog",
          confirmButtonColor: "#aef516"
        }),
        k: common_vendor.p({
          type: "danger",
          round: true,
          plain: true
        }),
        l: common_vendor.o(test1)
      } : {}, {
        m: common_vendor.p({
          icon: "home-o"
        }),
        n: common_vendor.p({
          icon: "shop-o"
        }),
        o: common_vendor.p({
          icon: "orders-o"
        }),
        p: common_vendor.p({
          icon: "user-o"
        }),
        q: common_vendor.o(onChange),
        r: common_vendor.p({
          active: active.num
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/main/MainPage.vue"]]);
wx.createPage(MiniProgramPage);
