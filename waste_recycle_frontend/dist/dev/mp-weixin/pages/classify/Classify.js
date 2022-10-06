"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_store_index = require("../store/index.js");
var wxcomponents_config_commonConfig = require("../../wxcomponents/config/commonConfig.js");
if (!Array) {
  const _component_van_nav_bar = common_vendor.resolveComponent("van-nav-bar");
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_empty = common_vendor.resolveComponent("van-empty");
  const _component_van_card = common_vendor.resolveComponent("van-card");
  const _component_van_tree_select = common_vendor.resolveComponent("van-tree-select");
  (_component_van_nav_bar + _component_van_search + _component_van_empty + _component_van_card + _component_van_tree_select)();
}
const _sfc_main = {
  __name: "Classify",
  setup(__props) {
    common_vendor.onBeforeMount(initData);
    common_vendor.watch(() => pages_store_index.store.state.num, (value, oldValue) => {
      let index = pages_store_index.store.state.cardIndex;
      if (value <= 0) {
        cards[data.activeIndex].splice(index, 1);
      }
      if (value !== 0) {
        cards[data.activeIndex][index].num = value;
      }
    });
    function introduce(desc) {
      let tmp = desc.toString();
      if (tmp.length > 10) {
        return tmp.slice(0, 9) + "...";
      }
      return desc;
    }
    function initData() {
      let category = "";
      switch (data.activeIndex) {
        case 0:
          category = "\u529E\u516C\u7528\u54C1";
          break;
        case 1:
          category = "\u670D\u9970\u978B\u5E3D";
          break;
        case 2:
          category = "\u4E66\u7C4D";
          break;
        case 3:
          category = "\u7F8E\u5986\u4E2A\u62A4";
          break;
        case 4:
          category = "\u5BB6\u5177";
          break;
        case 5:
          category = "\u751F\u6D3B\u7528\u54C1";
          break;
        case 6:
          category = "\u6570\u7801";
          break;
        case 7:
          category = "\u98DF\u54C1";
          break;
        case 8:
          category = "\u7535\u5668";
          break;
        case 9:
          category = "\u5176\u4ED6";
          break;
      }
      common_vendor.index.request({
        method: "GET",
        url: "/goods/category",
        data: {
          category
        },
        success: function(res) {
          console.log(res.data);
          if (res.data.length !== 0) {
            for (let i = 0; i <= cards.length; i++) {
              cards[data.activeIndex].pop();
            }
            cards[data.activeIndex].pop();
            for (let i = 0; i < res.data.length; i++) {
              cards[data.activeIndex].push(res.data[i]);
            }
          }
        }
      });
    }
    function onTapCard(item, index) {
      pages_store_index.store.commit("cardIndexChange", index);
      common_vendor.index.navigateTo({
        url: "/pages/buyGoods/BuyGoods?item=" + encodeURIComponent(JSON.stringify(item))
      });
    }
    const data = common_vendor.reactive({
      activeId: 0,
      activeIndex: pages_store_index.store.state.activeIndex,
      items: [
        { text: "\u529E\u516C\u7528\u54C1" },
        { text: "\u670D\u9970\u978B\u5E3D" },
        { text: "\u4E66\u7C4D" },
        { text: "\u7F8E\u5986\u4E2A\u62A4" },
        { text: "\u5BB6\u5177" },
        { text: "\u751F\u6D3B\u7528\u54C1" },
        { text: "\u6570\u7801" },
        { text: "\u98DF\u54C1" },
        { text: "\u7535\u5668" },
        { text: "\u5176\u4ED6" }
      ]
    });
    const cards = common_vendor.reactive([[], [], [], [], [], [], [], [], [], []]);
    const searchVal = common_vendor.ref("");
    function onChange(e) {
      searchVal.value = e.detail;
    }
    function onSearch() {
      common_vendor.index.request({
        method: "GET",
        url: "/goods/like",
        data: {
          goodsName: searchVal.value,
          category: data.items[data.activeIndex].text
        },
        success: function(res) {
          if (res.data.length !== 0) {
            for (let i = 0; i <= cards[data.activeIndex].length; i++) {
              cards[data.activeIndex].pop();
            }
            cards[data.activeIndex].pop();
            cards[data.activeIndex].pop();
            cards[data.activeIndex].pop();
            for (let i = 0; i < res.data.length; i++) {
              cards[data.activeIndex].push(res.data[i]);
            }
          } else if (res.data.length === 0) {
            let num = cards[data.activeIndex].length;
            for (let i = 0; i < num; i++) {
              cards[data.activeIndex].pop();
            }
          }
        }
      });
    }
    function onClickLeft() {
      pages_store_index.store.commit("rankFlush", true);
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    function picture(pictureId) {
      if (pictureId.length === 0) {
        return "https://img.yzcdn.cn/vant/custom-empty-image.png";
      }
      return wxcomponents_config_commonConfig.commonConfig.baseUrl + "/grid?pictureId=" + pictureId;
    }
    function onClickNav(event) {
      data.activeIndex = event.detail.index;
      initData();
    }
    function onClickItem(event) {
      data.activeId = event.detail.id;
      console.log(data.activeId);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onClickLeft),
        b: common_vendor.p({
          title: "\u5546\u54C1\u5206\u7C7B",
          leftText: "\u8FD4\u56DE",
          leftArrow: true
        }),
        c: common_vendor.o(onSearch),
        d: common_vendor.o(onChange),
        e: common_vendor.o(onSearch),
        f: common_vendor.p({
          placeholder: "\u641C\u7D22\u5F53\u524D\u7C7B\u578B\u7684\u5546\u54C1",
          shape: "round",
          value: searchVal.value,
          useActionSlot: true
        }),
        g: cards[data.activeIndex].length === 0
      }, cards[data.activeIndex].length === 0 ? {
        h: common_vendor.p({
          image: "../../../static/no.png",
          description: "\u5DF2\u552E\u7A7A~"
        })
      } : {}, {
        i: cards[data.activeIndex].length !== 0
      }, cards[data.activeIndex].length !== 0 ? {
        j: common_vendor.f(cards[data.activeIndex], (item, index, i0) => {
          return {
            a: common_vendor.t(introduce(item.introduce)),
            b: common_vendor.t(item.userName),
            c: common_vendor.t(item.addressName),
            d: common_vendor.o(($event) => onTapCard(item, index)),
            e: "ae0f370a-4-" + i0 + ",ae0f370a-2",
            f: common_vendor.p({
              num: item.num,
              price: item.price,
              title: item.goodsName,
              thumb: picture(item.pictureId),
              thumbMode: "cover"
            })
          };
        })
      } : {}, {
        k: common_vendor.o(onClickNav),
        l: common_vendor.o(onClickItem),
        m: common_vendor.o(($event) => data.activeId = $event),
        n: common_vendor.o(($event) => data.activeIndex = $event),
        o: common_vendor.p({
          items: data.items,
          height: "82vh",
          activeId: data.activeId,
          mainActiveIndex: data.activeIndex
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae0f370a"], ["__file", "D:/weapp/waste_recycle_demo/src/pages/classify/Classify.vue"]]);
wx.createPage(MiniProgramPage);
