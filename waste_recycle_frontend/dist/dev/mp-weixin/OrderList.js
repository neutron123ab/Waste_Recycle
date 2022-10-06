"use strict";
var common_vendor = require("./common/vendor.js");
var wxcomponents_config_commonConfig = require("./wxcomponents/config/commonConfig.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_empty = common_vendor.resolveComponent("van-empty");
  const _component_van_card = common_vendor.resolveComponent("van-card");
  const _easycom_uni_pagination2 = common_vendor.resolveComponent("uni-pagination");
  (_component_van_nav_bar + _component_van_empty + _component_van_card + _easycom_uni_pagination2)();
}
const _easycom_uni_pagination = () => "./components/uni-pagination/uni-pagination.js";
if (!Math) {
  _easycom_uni_pagination();
}
const _sfc_main = {
  __name: "OrderList",
  setup(__props) {
    const items = common_vendor.reactive([]);
    const pagination = common_vendor.reactive({
      current: 1,
      total: 0,
      pageSize: 5
    });
    common_vendor.onBeforeMount(initData);
    function initData() {
      let openid = common_vendor.index.getStorageSync("openid");
      common_vendor.index.request({
        method: "GET",
        url: "/order",
        data: {
          openid,
          page: pagination.current,
          pageSize: pagination.pageSize
        },
        success: function(res) {
          let length = items.length;
          for (let i = 0; i <= length; i++) {
            items.pop();
          }
          items.pop();
          for (let i = 0; i < res.data.records.length; i++) {
            items.push(res.data.records[i]);
          }
          pagination.total = res.data.total;
        }
      });
    }
    function change(e) {
      let openid = common_vendor.index.getStorageSync("openid");
      pagination.current = e.current;
      common_vendor.index.request({
        method: "GET",
        url: "/order",
        data: {
          openid,
          page: pagination.current,
          pageSize: pagination.pageSize
        },
        success: function(res) {
          if (res.data.records.length !== 0) {
            console.log(res.data, res.data, res.data);
            for (let i = 0; i <= items.length; i++) {
              items.pop();
            }
            items.pop();
            for (let i = 0; i < res.data.records.length; i++) {
              items.push(res.data.records[i]);
            }
            pagination.total = res.data.total;
          }
        }
      });
    }
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function introduce(desc) {
      let tmp = desc.toString();
      if (tmp.length > 10) {
        return tmp.slice(0, 9) + "...";
      }
      return desc;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u6211\u7684\u8BA2\u5355"
        }),
        b: items.length === 0
      }, items.length === 0 ? {
        c: common_vendor.p({
          image: "../../../static/no.png",
          description: "\u7A7A\u7A7A\u5982\u4E5F~"
        })
      } : {}, {
        d: items.length !== 0
      }, items.length !== 0 ? {
        e: common_vendor.f(items, (item, k0, i0) => {
          return {
            a: common_vendor.t(introduce(item.goodsInfo.introduce)),
            b: common_vendor.t(item.goodsInfo.category),
            c: common_vendor.t(item.purchaseTime),
            d: "698aaf56-2-" + i0,
            e: common_vendor.p({
              num: item.num,
              price: item.price,
              title: item.goodsName,
              thumb: picture(item.goodsInfo.pictureId),
              thumbMode: "cover"
            })
          };
        })
      } : {}, {
        f: items.length !== 0
      }, items.length !== 0 ? {
        g: common_vendor.o(change),
        h: common_vendor.p({
          showIcon: "true",
          total: pagination.total,
          current: pagination.current,
          pageSize: pagination.pageSize,
          title: "\u6807\u9898"
        })
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-698aaf56"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/orderList/OrderList.vue"]]);
exports.Component = Component;
