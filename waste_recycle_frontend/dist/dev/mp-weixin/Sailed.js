"use strict";
var common_vendor = require("./common/vendor.js");
var pages_store_index = require("./pages/store/index.js");
var wxcomponents_config_commonConfig = require("./wxcomponents/config/commonConfig.js");
if (!Array) {
  const _component_van_empty = common_vendor.resolveComponent("van-empty");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_card = common_vendor.resolveComponent("van-card");
  const _easycom_uni_pagination2 = common_vendor.resolveComponent("uni-pagination");
  (_component_van_empty + _component_van_button + _component_van_card + _easycom_uni_pagination2)();
}
const _easycom_uni_pagination = () => "./components/uni-pagination/uni-pagination.js";
if (!Math) {
  _easycom_uni_pagination();
}
const _sfc_main = {
  __name: "Sailed",
  setup(__props) {
    const items = common_vendor.reactive([]);
    const pagination = common_vendor.reactive({
      current: 1,
      total: 0,
      pageSize: 4
    });
    common_vendor.watch(() => pages_store_index.store.state.active, (value, oldValue) => {
      if (value === 1) {
        initData();
        pages_store_index.store.commit("change", 0);
      }
    });
    function introduce(desc) {
      let tmp = desc.toString();
      if (tmp.length > 10) {
        return tmp.slice(0, 9) + "...";
      }
      return desc;
    }
    function change(e) {
      let openid = common_vendor.index.getStorageSync("openid");
      pagination.current = e.current;
      common_vendor.index.request({
        method: "GET",
        url: "/goods/page",
        data: {
          openid,
          page: pagination.current - 1,
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
    function updateGoodsInfo(item) {
      common_vendor.index.navigateTo({
        url: "/pages/manage/components/Update?item=" + encodeURIComponent(JSON.stringify(item))
      });
    }
    function deleteGoods(goodsName) {
      common_vendor.index.showModal({
        title: "\u63D0\u9192",
        content: "\u662F\u5426\u5220\u9664\u8BE5\u5546\u54C1",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.request({
              method: "DELETE",
              url: "/goods",
              data: {
                openid: common_vendor.index.getStorageSync("openid"),
                goodsName
              },
              success: function(result) {
                if (result.data === 0) {
                  common_vendor.index.showToast({
                    title: "\u5220\u9664\u5931\u8D25",
                    icon: "error"
                  });
                } else {
                  pages_store_index.store.commit("change", 1);
                  common_vendor.index.showToast({
                    title: "\u5220\u9664\u6210\u529F",
                    icon: "success"
                  });
                  if (items.length === 1) {
                    items.pop();
                  }
                }
              }
            });
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
    common_vendor.onBeforeMount(initData);
    function initData() {
      let id = pages_store_index.store.state.active;
      console.log(id);
      if (id === 1) {
        let openid = common_vendor.index.getStorageSync("openid");
        common_vendor.index.request({
          method: "GET",
          url: "/goods/page",
          data: {
            openid,
            page: pagination.current - 1,
            pageSize: pagination.pageSize
          },
          success: function(res) {
            console.log(res.data, res.data, res.data);
            if (res.data.records.length !== 0) {
              for (let i = 0; i <= res.data.records.length; i++) {
                items.pop();
              }
              for (let i = 0; i < res.data.records.length; i++) {
                items.push(res.data.records[i]);
              }
              pagination.total = res.data.total;
            }
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: items.length === 0
      }, items.length === 0 ? {
        b: common_vendor.p({
          image: "../../../static/no.png",
          description: "\u7A7A\u7A7A\u5982\u4E5F~"
        })
      } : {}, {
        c: items.length !== 0
      }, items.length !== 0 ? {
        d: common_vendor.f(items, (item, k0, i0) => {
          return {
            a: common_vendor.t(introduce(item.introduce)),
            b: common_vendor.t(item.category),
            c: common_vendor.t(item.uploadTime),
            d: common_vendor.o(($event) => updateGoodsInfo(item)),
            e: "c9bdbeae-2-" + i0 + "," + ("c9bdbeae-1-" + i0),
            f: common_vendor.o(($event) => deleteGoods(item.goodsName)),
            g: "c9bdbeae-3-" + i0 + "," + ("c9bdbeae-1-" + i0),
            h: "c9bdbeae-1-" + i0,
            i: common_vendor.p({
              num: item.num,
              price: item.price,
              title: item.goodsName,
              thumb: picture(item.pictureId),
              thumbMode: "cover"
            })
          };
        }),
        e: common_vendor.p({
          type: "info",
          size: "mini"
        }),
        f: common_vendor.p({
          type: "danger",
          size: "mini"
        })
      } : {}, {
        g: items.length !== 0
      }, items.length !== 0 ? {
        h: common_vendor.o(change),
        i: common_vendor.p({
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
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/pages/manage/components/Sailed.vue"]]);
exports.Component = Component;
