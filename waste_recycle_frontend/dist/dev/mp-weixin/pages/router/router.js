"use strict";
var common_vendor = require("../../common/vendor.js");
const router = common_vendor.uniSimpleRouter.exports.createRouter({
  platform: "mp-weixin",
  routes: [
    {
      path: "/fleaMarket",
      redirect: (to) => {
        return { name: "fleaMarket" };
      }
    },
    {
      path: "/siteSearch",
      redirect: (to) => {
        return { name: "siteSearch" };
      }
    },
    {
      path: "/manage",
      redirect: (to) => {
        return { name: "manage" };
      }
    },
    {
      path: "/todayNews",
      redirect: (to) => {
        return { name: "todayNews" };
      }
    },
    {
      path: "/homepage",
      redirect: (to) => {
        return { name: "homepage" };
      }
    },
    {
      path: "/my",
      redirect: (to) => {
        return { name: "my" };
      }
    },
    {
      path: "/trade",
      redirect: (to) => {
        return { name: "trade" };
      }
    },
    {
      path: "/orderList",
      redirect: (to) => {
        return { name: "orderList" };
      }
    },
    {
      path: "/sailed",
      redirect: (to) => {
        return { name: "sailed" };
      }
    },
    {
      path: "/noSailed",
      redirect: (to) => {
        return { name: "noSailed" };
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from) => {
  console.log("\u8DF3\u8F6C\u7ED3\u675F");
});
exports.router = router;
