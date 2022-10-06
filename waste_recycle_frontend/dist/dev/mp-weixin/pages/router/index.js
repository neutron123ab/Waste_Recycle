"use strict";
var common_vendor = require("../../common/vendor.js");
var wxcomponents_config_commonConfig = require("../../wxcomponents/config/commonConfig.js");
common_vendor.index.addInterceptor("request", {
  invoke(args) {
    args.url = wxcomponents_config_commonConfig.commonConfig.baseUrl + args.url;
  },
  success(args) {
  },
  fail(err) {
    console.log("interceptor-fail", err);
  },
  complete(res) {
    console.log("interceptor-complete", res);
  }
});
common_vendor.index.addInterceptor("uploadFile", {
  invoke(args) {
    args.url = wxcomponents_config_commonConfig.commonConfig.baseUrl + args.url;
  },
  success(args) {
  },
  fail(err) {
    console.log("interceptor-fail", err);
  },
  complete(res) {
    console.log("interceptor-complete", res);
  }
});
