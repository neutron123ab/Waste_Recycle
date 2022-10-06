"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
var pages_store_index = require("./pages/store/index.js");
var pages_router_router = require("./pages/router/router.js");
require("./pages/router/index.js");
require("./wxcomponents/config/commonConfig.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/main/MainPage.js";
  "./pages/buyGoods/BuyGoods.js";
  "./pages/index/UserInfo.js";
  "./pages/classify/Classify.js";
  "./pages/trade/Trade2.js";
  "./pages/manage/Manage2.js";
  "./pages/manage/components/Sailed2.js";
  "./pages/manage/components/NoSailed2.js";
  "./pages/manage/components/Update.js";
  "./pages/orderList/OrderList2.js";
  "./pages/My/My2.js";
  "./pages/homepage/homepage2.js";
  "./pages/news/News1.js";
  "./pages/news/News2.js";
  "./pages/homepage/components/market/FleaMarket2.js";
  "./pages/homepage/components/siteSearch/SiteSearch2.js";
  "./pages/homepage/components/todayNews/TodayNews2.js";
  "./pages/homepage/components/platform/Platform2.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/weapp/waste_recycle_demo/src/App.vue"]]);
const FleaMarket = () => "./pages/homepage/components/market/FleaMarket.js";
const SiteSearch = () => "./pages/homepage/components/siteSearch/SiteSearch.js";
const TodayNews = () => "./pages/homepage/components/todayNews/TodayNews.js";
const Platform = () => "./pages/homepage/components/platform/Platform.js";
const homepage = () => "./pages/homepage/homepage.js";
const My = () => "./pages/My/My.js";
const Trade = () => "./pages/trade/Trade.js";
const OrderList = () => "./pages/orderList/OrderList.js";
const Manage = () => "./pages/manage/Manage.js";
const NoSailed = () => "./pages/manage/components/NoSailed.js";
const Sailed = () => "./pages/manage/components/Sailed.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("flea-market", FleaMarket);
  app.component("site-search", SiteSearch);
  app.component("today-news", TodayNews);
  app.component("plat-form", Platform);
  app.component("home-page", homepage);
  app.component("my", My);
  app.component("trade", Trade);
  app.component("order-list", OrderList);
  app.component("manage", Manage);
  app.component("noSailed", NoSailed);
  app.component("sailed", Sailed);
  app.use(pages_store_index.store);
  common_vendor.uniSimpleRouter.exports.RouterMount(app, pages_router_router.router, "#app");
  return {
    app,
    router: pages_router_router.router
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
