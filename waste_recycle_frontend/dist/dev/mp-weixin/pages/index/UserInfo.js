"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_toast = common_vendor.resolveComponent("van-toast");
  (_component_van_nav_bar + _component_van_image + _component_van_field + _component_van_button + _component_van_toast)();
}
const _sfc_main = {
  __name: "UserInfo",
  setup(__props) {
    const defaultAvatarUrl = "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";
    const data = common_vendor.reactive({
      avatarUrl: defaultAvatarUrl,
      nickname: "",
      userinfo: {}
    });
    function onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      data.avatarUrl = avatarUrl;
    }
    function onChange(event) {
      data.nickname = event.detail.value;
      console.log(data.nickname);
    }
    function onClickLeft() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    function onClickJump() {
      if (data.nickname.length !== 0) {
        common_vendor.index.login({
          provider: "weixin",
          success: function(res) {
            common_vendor.index.request({
              method: "GET",
              url: "/login",
              data: {
                "code": res.code
              },
              success: function(response) {
                let openid = response.data.openid;
                if (openid.length !== 0) {
                  common_vendor.index.setStorage({
                    key: "openid",
                    data: openid
                  });
                  data.userinfo = {
                    "nickname": data.nickname,
                    "avatarUrl": data.avatarUrl
                  };
                  common_vendor.index.setStorage({
                    key: "userinfo",
                    data: data.userinfo
                  });
                  common_vendor.index.redirectTo({
                    url: "/pages/main/MainPage"
                  });
                  console.log(data.userinfo);
                  common_vendor.index.showToast({
                    title: "\u767B\u5F55\u6210\u529F",
                    icon: "success"
                  });
                } else {
                  common_vendor.index.showToast({
                    title: "\u8BF7\u5B8C\u5584\u4FE1\u606F",
                    icon: "error"
                  });
                }
              }
            });
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "\u8BF7\u5B8C\u5584\u4FE1\u606F",
          icon: "error"
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "weixin",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        c: common_vendor.p({
          width: "200rpx",
          height: "200rpx",
          src: data.avatarUrl
        }),
        d: common_vendor.o(onChooseAvatar),
        e: common_vendor.o(onChange),
        f: common_vendor.o(onClickLeft),
        g: common_vendor.p({
          value: data.nickname,
          type: "nickname",
          label: "\u6635\u79F0",
          placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        h: common_vendor.o(onClickJump),
        i: common_vendor.p({
          type: "primary",
          block: true
        }),
        j: common_vendor.p({
          id: "van-toast"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c14cf4c"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/index/UserInfo.vue"]]);
wx.createPage(MiniProgramPage);
