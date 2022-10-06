"use strict";
var common_vendor = require("../../common/vendor.js");
var wxcomponents_config_commonConfig = require("../../wxcomponents/config/commonConfig.js");
var pages_store_index = require("../store/index.js");
if (!Array) {
  const _component_van_notify = common_vendor.resolveComponent("van-notify");
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_sticky = common_vendor.resolveComponent("van-sticky");
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _component_van_cell = common_vendor.resolveComponent("van-cell");
  const _component_van_rate = common_vendor.resolveComponent("van-rate");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_goods_action_icon = common_vendor.resolveComponent("van-goods-action-icon");
  const _component_van_goods_action_button = common_vendor.resolveComponent("van-goods-action-button");
  const _component_van_goods_action = common_vendor.resolveComponent("van-goods-action");
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  (_component_van_notify + _component_van_nav_bar + _component_van_sticky + _component_van_image + _component_van_cell + _component_van_rate + _component_van_cell_group + _component_van_goods_action_icon + _component_van_goods_action_button + _component_van_goods_action + _component_van_stepper + _component_van_button + _component_van_field + _component_van_popup)();
}
const _sfc_main = {
  __name: "BuyGoods",
  setup(__props) {
    common_vendor.onBeforeMount(initNum);
    const data = common_vendor.reactive([]);
    const popup = common_vendor.reactive({
      show: false,
      num: 1,
      address: "",
      addressName: "\u8BF7\u9009\u62E9\u5730\u5740",
      userName: "",
      phoneNumber: ""
    });
    common_vendor.onLoad((option) => {
      const item = JSON.parse(decodeURIComponent(option.item));
      data.push(item);
    });
    function initNum() {
      common_vendor.index.request({
        method: "GET",
        url: "/order/num?id=" + data[0].id,
        success: function(res) {
          pages_store_index.store.commit("goodsNumChange", res.data);
        }
      });
    }
    function chooseLocation() {
      common_vendor.index.chooseLocation({
        success: function(res) {
          popup.address = res.address;
          popup.addressName = res.name;
        }
      });
    }
    function onChangeUsername(event) {
      popup.userName = event.detail;
    }
    function onChangePhoneNumber(event) {
      popup.phoneNumber = event.detail;
    }
    function onClose() {
      popup.show = false;
    }
    function onChangeNum(event) {
      popup.num = event.detail;
    }
    function onBuy() {
      popup.show = true;
    }
    function onBuyNow() {
      if (popup.userName.length !== 0 && popup.phoneNumber.length !== 0 && popup.addressName.length !== 0) {
        if (popup.num > data[0].num) {
          common_vendor.index.showToast({
            title: "\u6570\u91CF\u8D85\u8FC7\u9650\u5236",
            icon: "error"
          });
        } else {
          let openid = common_vendor.index.getStorageSync("openid");
          common_vendor.index.request({
            method: "POST",
            url: "/order",
            data: {
              goodsId: data[0].id,
              goodsName: data[0].goodsName,
              openid,
              userName: popup.userName,
              phoneNumber: popup.phoneNumber,
              address: popup.address,
              addressName: popup.addressName,
              price: data[0].price,
              num: popup.num
            },
            success: function(res) {
              console.log(res.data);
              common_vendor.index.request({
                method: "PUT",
                url: "/order",
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                  id: data[0].id,
                  purchaseNum: popup.num
                },
                success: function(res1) {
                  if (res1.data !== 0) {
                    common_vendor.index.showToast({
                      title: "\u8D2D\u4E70\u6210\u529F",
                      icon: "success"
                    });
                  } else {
                    common_vendor.index.showToast({
                      title: "\u8D2D\u4E70\u5931\u8D25",
                      icon: "error"
                    });
                  }
                  common_vendor.index.request({
                    method: "GET",
                    url: "/order/num?id=" + data[0].id,
                    success: function(res2) {
                      data[0].num = res2.data;
                      console.log("+++++");
                      console.log(pages_store_index.store.state.num, res2.data);
                      pages_store_index.store.commit("goodsNumChange", res2.data);
                      console.log(pages_store_index.store.state.num);
                      console.log("++++++");
                    }
                  });
                  popup.show = false;
                }
              });
            }
          });
        }
      } else {
        common_vendor.index.showToast({
          title: "\u8BF7\u5B8C\u5584\u4FE1\u606F",
          icon: "error"
        });
      }
    }
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function onClickLeft() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          id: "van-notify"
        }),
        b: common_vendor.o(onClickLeft),
        c: common_vendor.p({
          title: data[0].goodsName,
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        d: common_vendor.p({
          width: "100vw",
          height: "55vh",
          fit: "contain",
          src: picture(data[0].pictureId)
        }),
        e: common_vendor.p({
          title: "\u5546\u54C1\u540D",
          value: data[0].goodsName
        }),
        f: common_vendor.p({
          title: "\u5546\u54C1\u4ECB\u7ECD",
          value: data[0].introduce
        }),
        g: common_vendor.p({
          title: "\u5355\u4EF7",
          value: data[0].price + " \u5143"
        }),
        h: common_vendor.p({
          title: "\u5269\u4F59\u6570\u91CF",
          value: data[0].num
        }),
        i: common_vendor.o(_ctx.onChange),
        j: common_vendor.p({
          value: "2.5",
          allowHalf: true,
          voidIcon: "star",
          voidColor: "#eee"
        }),
        k: common_vendor.p({
          title: "\u8BC4\u5206"
        }),
        l: common_vendor.p({
          inset: true
        }),
        m: common_vendor.p({
          icon: "chat-o",
          text: "\u5BA2\u670D"
        }),
        n: common_vendor.p({
          icon: "cart-o",
          text: "\u8D2D\u7269\u8F66"
        }),
        o: common_vendor.p({
          icon: "shop-o",
          text: "\u5E97\u94FA"
        }),
        p: common_vendor.p({
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          type: "warning"
        }),
        q: common_vendor.o(onBuy),
        r: common_vendor.p({
          text: "\u7ACB\u5373\u8D2D\u4E70"
        }),
        s: common_vendor.o(onChangeNum),
        t: common_vendor.p({
          value: data.num,
          max: data[0].num
        }),
        v: common_vendor.p({
          title: "\u8BF7\u9009\u62E9\u8D2D\u4E70\u8D2D\u4E70\u6570\u91CF"
        }),
        w: common_vendor.o(chooseLocation),
        x: common_vendor.p({
          size: "small",
          type: "primary"
        }),
        y: common_vendor.p({
          label: popup.addressName,
          title: "\u6536\u8D27\u5730\u5740"
        }),
        z: common_vendor.o(onChangeUsername),
        A: common_vendor.p({
          label: "\u6536\u8D27\u4EBA",
          value: popup.userName,
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u6635\u79F0\u6216\u59D3\u540D"
        }),
        B: common_vendor.o(onChangePhoneNumber),
        C: common_vendor.p({
          label: "\u8054\u7CFB\u65B9\u5F0F",
          value: popup.phoneNumber,
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u624B\u673A\u53F7\u7801"
        }),
        D: common_vendor.p({
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          type: "warning"
        }),
        E: common_vendor.o(onBuyNow),
        F: common_vendor.p({
          text: "\u7ACB\u5373\u8D2D\u4E70"
        }),
        G: common_vendor.o(onClose),
        H: common_vendor.p({
          show: popup.show,
          position: "bottom",
          closeable: true,
          round: true
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/buyGoods/BuyGoods.vue"]]);
wx.createPage(MiniProgramPage);
