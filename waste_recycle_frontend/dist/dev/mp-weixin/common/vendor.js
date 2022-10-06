"use strict";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$2(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$2(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return isObject$2(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const LINEFEED = "\n";
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const encode = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const isObject$1 = (val) => val !== null && typeof val === "object";
const defaultDelimiters = ["{", "}"];
class BaseFormatter {
  constructor() {
    this._caches = /* @__PURE__ */ Object.create(null);
  }
  interpolate(message, values, delimiters = defaultDelimiters) {
    if (!values) {
      return [message];
    }
    let tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message, delimiters);
      this._caches[message] = tokens;
    }
    return compile$1(tokens, values);
  }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, [startDelimiter, endDelimiter]) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: "text", value: text });
      }
      text = "";
      let sub = "";
      char = format[position++];
      while (char !== void 0 && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      const isClosed = char === endDelimiter;
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      tokens.push({ value: sub, type });
    } else {
      text += char;
    }
  }
  text && tokens.push({ type: "text", value: text });
  return tokens;
}
function compile$1(tokens, values) {
  const compiled = [];
  let index2 = 0;
  const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
  if (mode === "unknown") {
    return compiled;
  }
  while (index2 < tokens.length) {
    const token = tokens[index2];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case "named":
        if (mode === "named") {
          compiled.push(values[token.value]);
        } else {
          {
            console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
          }
        }
        break;
      case "unknown":
        {
          console.warn(`Detect 'unknown' type of token!`);
        }
        break;
    }
    index2++;
  }
  return compiled;
}
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
class I18n {
  constructor({ locale, fallbackLocale, messages, watcher, formater }) {
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  setLocale(locale) {
    const oldLocale = this.locale;
    this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
    if (!this.messages[this.locale]) {
      this.messages[this.locale] = {};
    }
    this.message = this.messages[this.locale];
    if (oldLocale !== this.locale) {
      this.watchers.forEach((watcher) => {
        watcher(this.locale, oldLocale);
      });
    }
  }
  getLocale() {
    return this.locale;
  }
  watchLocale(fn) {
    const index2 = this.watchers.push(fn) - 1;
    return () => {
      this.watchers.splice(index2, 1);
    };
  }
  add(locale, message, override = true) {
    const curMessages = this.messages[locale];
    if (curMessages) {
      if (override) {
        Object.assign(curMessages, message);
      } else {
        Object.keys(message).forEach((key) => {
          if (!hasOwn(curMessages, key)) {
            curMessages[key] = message[key];
          }
        });
      }
    } else {
      this.messages[locale] = message;
    }
  }
  f(message, values, delimiters) {
    return this.formater.interpolate(message, values, delimiters).join("");
  }
  t(key, locale, values) {
    let message = this.message;
    if (typeof locale === "string") {
      locale = normalizeLocale(locale, this.messages);
      locale && (message = this.messages[locale]);
    } else {
      values = locale;
    }
    if (!hasOwn(message, key)) {
      console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
      return key;
    }
    return this.formater.interpolate(message[key], values).join("");
  }
}
function watchAppLocale(appVm, i18n) {
  if (appVm.$watchLocale) {
    appVm.$watchLocale((newLocale) => {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(() => appVm.$locale, (newLocale) => {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof index !== "undefined" && index.getLocale) {
    return index.getLocale();
  }
  if (typeof global !== "undefined" && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
  if (typeof locale !== "string") {
    [locale, messages] = [
      messages,
      locale
    ];
  }
  if (typeof locale !== "string") {
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== "string") {
    fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  const i18n = new I18n({
    locale,
    fallbackLocale,
    messages,
    watcher
  });
  let t2 = (key, values) => {
    if (typeof getApp !== "function") {
      t2 = function(key2, values2) {
        return i18n.t(key2, values2);
      };
    } else {
      let isWatchedAppLocale = false;
      t2 = function(key2, values2) {
        const appVm = getApp().$vm;
        if (appVm) {
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key2, values2);
      };
    }
    return t2(key, values);
  };
  return {
    i18n,
    f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t(key, values) {
      return t2(key, values);
    },
    add(locale2, message, override = true) {
      return i18n.add(locale2, message, override);
    },
    watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale() {
      return i18n.getLocale();
    },
    setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn$1(data, key));
    if (isString(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$2(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg$1(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg$1(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook) {
  return function(data) {
    return hook(data) || data;
  };
}
function queue$1(hooks, data) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      const res = hook(data);
      if (isPromise$1(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$1(hooks, res).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      const res = queue$1(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(interceptor, options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, fn, extend(args, { success: resolve2, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !isPlainObject(options.formatArgs) && isPlainObject(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn$1(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id, name, res) {
  return invokeCallback(id, extend(res || {}, { errMsg: name + ":ok" }));
}
function invokeFail(id, name, errMsg, errRes) {
  return invokeCallback(id, extend({ errMsg: name + ":fail" + (errMsg ? " " + errMsg : "") }, errRes));
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function normalizeErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + LINEFEED + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, normalizeErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { platform, pixelRatio, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}, Upx2pxProtocol);
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString(method) && isPlainObject(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString(method)) {
    if (isPlainObject(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: Function
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
const emitter = new E$1();
const $on = defineSyncApi(API_ON, (name, callback) => {
  emitter.on(name, callback);
  return () => emitter.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  emitter.once(name, callback);
  return () => emitter.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!name) {
    emitter.e = {};
    return;
  }
  if (!isArray(name))
    name = [name];
  name.forEach((n2) => emitter.off(n2, callback));
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  emitter.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve: resolve2, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve2({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve2, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve2,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn$1(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ${methodName} \u6682\u4E0D\u652F\u6301 ${key}`);
          } else if (isString(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn$1(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper(methodName, method) {
    if (!hasOwn$1(protocols2, methodName)) {
      return method;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale) => {
  const app = getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback
};
function initUni(api, protocols2) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn$1(target, key)) {
        return target[key];
      }
      if (hasOwn$1(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn$1(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper(key, wx[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:\u670D\u52A1[" + service + "]\u4E0D\u5B58\u5728"
      };
      isFunction(fail) && fail(res);
    }
    isFunction(complete) && complete(res);
  };
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language.replace(/_/g, "-");
  const parameters = {
    appId: "",
    appName: "",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.3",
    uniRuntimeVersion: "3.6.3",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language.replace(/_/g, "-");
    toRes = sortObject(extend(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "",
      appName: "",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage)
    }));
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getProvider,
  createSelectorQuery
});
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  redirectTo,
  previewImage,
  getSystemInfo,
  getSystemInfoSync,
  showActionSheet,
  getDeviceInfo,
  getAppBaseInfo,
  getWindowInfo,
  getAppAuthorizeSetting
});
var index = initUni(shims, protocols);
function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn$1(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set: set$1,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn$1(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$2(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$2(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
_a = "__v_isReadonly";
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
function emit(event, ...args) {
}
function devtoolsComponentEmit(component, event, params) {
  emit("component:emit", component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$2(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject$2(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey((ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`);
  }
}
const createHook$1 = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook$1("bm");
const onMounted = createHook$1("m");
const onBeforeUpdate = createHook$1("bu");
const onUpdated = createHook$1("u");
const onBeforeUnmount = createHook$1("bum");
const onUnmounted = createHook$1("um");
const onServerPrefetch = createHook$1("sp");
const onRenderTriggered = createHook$1("rtg");
const onRenderTracked = createHook$1("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component2 = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component2, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component2;
      }
    }
    const res = resolve(instance[type] || Component2[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component2;
    }
    if (warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.__$el || (i.__$el = {}),
  $data: (i) => i.data,
  $props: (i) => shallowReadonly(i.props),
  $attrs: (i) => shallowReadonly(i.attrs),
  $slots: (i) => shallowReadonly(i.slots),
  $refs: (i) => shallowReadonly(i.refs),
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $watch: (i) => instanceWatch.bind(i)
});
const isReservedPrefix = (key) => key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn$1(setupState, key)) {
      return setupState[key];
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn$1(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn$1(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn$1(data, key) || setupState !== EMPTY_OBJ && hasOwn$1(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise$1(data)) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject$2(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get3 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get3 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed$1({
        get: get3,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  {
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register2(_hook.bind(publicThis)));
    } else if (hook) {
      register2(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$2(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn$1(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$2(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$2(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn$1(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn$1(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject$2(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$2(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn$1(rawProps, key) && !hasOwn$1(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject$2(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject$2(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount() {
      },
      unmount() {
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
const queuePostRenderEffect = queuePostFlushCb;
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise$1(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$1(`setup() returned a Promise, but the version of Vue you are using does not support it yet.`);
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject$2(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions$1(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  );
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (instance.exposed) {
      warn$1(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed$1 = (getterOrOptions, debugOptions) => {
  return computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
const version = "3.2.39";
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            if (currentValue.length < preValue.length) {
              setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
            } else {
              currentValue.forEach((item, index2) => {
                _diff(item, preValue[index2], (path == "" ? "" : path + ".") + key + "[" + index2 + "]", result);
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
          } else {
            for (let subKey in currentValue) {
              _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick$1(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(fn.bind(instance.proxy), instance, 14);
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn$1(src, name)) {
          copy[name] = clone(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, oldData || getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick$1(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(options, instance, publicThis);
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const { setupState, $templateRefs, ctx: { $scope, $mpPlatform } } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach((templateRef) => setTemplateRef(templateRef, null, setupState));
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    const mpComponents = $scope.selectAllComponents(".r").concat($scope.selectAllComponents(".r-i-f"));
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick$1(instance, doSet);
  }
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find((com) => com && (com.properties || com.props).uI === id);
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return mpInstance;
  }
  return null;
}
function setTemplateRef({ r, f: f2 }, refValue, setupState) {
  if (isFunction(r)) {
    r(refValue, {});
  } else {
    const _isString = isString(r);
    const _isRef = isRef(r);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray(r.value)) {
          r.value = [];
        }
        const existing = r.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
        }
      } else if (_isString) {
        if (hasOwn$1(setupState, r)) {
          setupState[r] = refValue;
        }
      } else if (isRef(r)) {
        r.value = refValue;
      } else {
        warnRef(r);
      }
    } else {
      warnRef(r);
    }
  }
}
function warnRef(ref2) {
  warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
var MPType;
(function(MPType2) {
  MPType2["APP"] = "app";
  MPType2["PAGE"] = "page";
  MPType2["COMPONENT"] = "component";
})(MPType || (MPType = {}));
const queuePostRenderEffect$1 = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
  }
  setupComponent(instance);
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const { type: Component2, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, uid: uid2, appContext: { app: { config: { globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 } } } }, inheritAttrs } = instance;
  instance.$templateRefs = [];
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx);
    } else {
      fallthroughAttrs(inheritAttrs, props, propsOptions, Component2.props ? attrs : getFunctionalFallthrough(attrs));
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(props, null);
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter((key) => key !== "class" && key !== "style");
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys.forEach((key) => props[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(data, oldScopedSlotData[index2]);
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect, update: update3 }, allowed) {
  effect.allowRecurse = update3.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(instance);
  instance.$updateScopedSlots = () => nextTick(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      patch(instance, renderComponentRoot(instance));
    } else {
      const { bu, u } = instance;
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      patch(instance, renderComponentRoot(instance));
      if (u) {
        queuePostRenderEffect$1(u);
      }
    }
  };
  const effect = instance.effect = new ReactiveEffect(
    componentUpdateFn,
    () => queueJob(instance.update),
    instance.scope
  );
  const update3 = instance.update = effect.run.bind(effect);
  update3.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update3.ownerInstance = instance;
  }
  update3();
}
function unmountComponent(instance) {
  const { bum, scope, update: update3, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  scope.stop();
  if (update3) {
    update3.active = false;
  }
  if (um) {
    queuePostRenderEffect$1(um);
  }
  queuePostRenderEffect$1(() => {
    instance.isUnmounted = true;
  });
}
const oldCreateApp = createAppAPI();
function createVueApp(rootComponent, rootProps = null) {
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent3(initialVNode, options) {
    return mountComponent(createVNode(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(createVNode({ type: rootComponent }), {
      mpType: MPType.APP,
      mpInstance: null,
      parentComponent: null,
      slots: [],
      props: null
    });
    app._instance = instance.$;
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn$1(`Cannot unmount an app.`);
  };
  return app;
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType) {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (name.indexOf("on") === 0) {
      const hooks = options[name];
      if (isArray(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set(target, key, val) {
  return target[key] = val;
}
function createErrorHandler(app) {
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app._context.config;
  if (isFunction(app._component.onError)) {
    appConfig.errorHandler = createErrorHandler(app);
  }
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set;
    globalProperties.$applyOptions = applyOptions$2;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function vOn(value, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq") && (isString(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? eventTarget.dataset.eventsync === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray(res) || isPromise$1(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn$1(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn$1(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject(event.detail) && hasOwn$1(event.detail, "checked") && !hasOwn$1(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject$2(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
const o = (value, key) => vOn(value, key);
const f = (source, renderItem) => vFor(source, renderItem);
const e = (target, ...sources) => extend(target, ...sources);
const n = (value) => normalizeClass(value);
const t = (val) => toDisplayString(val);
const p = (props) => renderProps(props);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
const eventChannels = {};
const eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    const eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn$1(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  } else if (name === "onLoad" && args && args.__id__) {
    this.__eventChannel__ = getEventChannel(args.__id__);
    delete args.__id__;
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (name.indexOf("on") === 0 && isFunction(vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn$1(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks.forEach((hook) => {
          if (hasOwn$1(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  if (parseAppOptions) {
    parseAppOptions.parse(appOptions);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm, parseAppOptions));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm, parseAppOptions);
    const app = getApp({
      allowDefault: true
    });
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn$1(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn$1(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn$1(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
const builtInProps = [
  "eO",
  "uR",
  "uRIF",
  "uI",
  "uT",
  "uP",
  "uS"
];
function initDefaultProps(isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject(opts)) {
        let value = opts.default;
        if (isFunction(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key] = {
          type: opts.type,
          value
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps, false);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray(vueProps)) {
          vueProps.push("name");
          vueProps.push("value");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse: parse2, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  if (parse2) {
    parse2(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getApp().$vm.$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse: parse2, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse2 && parse2(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm, parseAppOptions), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
  };
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  mocks,
  isPage,
  initRelation,
  handleLink,
  initLifetimes
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var storeKey = "store";
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise(val) {
  return val && typeof val.then === "function";
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}
function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function() {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store, hot) {
  store._actions = /* @__PURE__ */ Object.create(null);
  store._mutations = /* @__PURE__ */ Object.create(null);
  store._wrappedGetters = /* @__PURE__ */ Object.create(null);
  store._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var state = store.state;
  installModule(store, state, [], store._modules.root, true);
  resetStoreState(store, state, hot);
}
function resetStoreState(store, state, hot) {
  var oldState = store._state;
  store.getters = {};
  store._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function(fn, key) {
    computedObj[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function() {
        return computedObj[key]();
      },
      enumerable: true
    });
  });
  store._state = reactive({
    data: state
  });
  if (store.strict) {
    enableStrictMode(store);
  }
  if (oldState) {
    if (hot) {
      store._withCommit(function() {
        oldState.data = null;
      });
    }
  }
}
function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && true) {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
    }
    store._modulesNamespaceMap[namespace] = module;
  }
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function() {
      {
        if (moduleName in parentState) {
          console.warn(
            '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
          );
        }
      }
      parentState[moduleName] = module.state;
    });
  }
  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function(mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function(action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function(getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function(child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === "";
  var local = {
    dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }
      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }
      store.commit(type, payload, options);
    }
  };
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function() {
        return store.getters;
      } : function() {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function() {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function(type) {
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }
      var localType = type.slice(splitPos);
      Object.defineProperty(gettersProxy, localType, {
        get: function() {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}
function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function(err) {
        store._devtoolHook.emit("vuex:error", err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store2) {
    return rawGetter(
      local.state,
      local.getters,
      store2.state,
      store2.getters
    );
  };
}
function enableStrictMode(store) {
  watch(function() {
    return store._state.data;
  }, function() {
    {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, flush: "sync" });
}
function getNestedState(state, path) {
  return path.reduce(function(state2, key) {
    return state2[key];
  }, state);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  {
    assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
  }
  return { type, payload, options };
}
var Module = function Module2(rawModule, runtime) {
  this.runtime = runtime;
  this._children = /* @__PURE__ */ Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors$1 = { namespaced: { configurable: true } };
prototypeAccessors$1.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update2(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors$1);
var ModuleCollection = function ModuleCollection2(rawRootModule) {
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get2(path) {
  return path.reduce(function(module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function(namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + "/" : "");
  }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0)
    runtime = true;
  {
    assertRawModule(path, rawModule);
  }
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function(rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is not registered"
      );
    }
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  {
    assertRawModule(path, newModule);
  }
  targetModule.update(newModule);
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
          );
        }
        return;
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}
var functionAssert = {
  assert: function(value) {
    return typeof value === "function";
  },
  expected: "function"
};
var objectAssert = {
  assert: function(value) {
    return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};
function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function(key) {
    if (!rawModule[key]) {
      return;
    }
    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function(value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}
function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
  if (path.length > 0) {
    buf += ' in module "' + path.join(".") + '"';
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}
function createStore(options) {
  return new Store(options);
}
var Store = function Store2(options) {
  var this$1$1 = this;
  if (options === void 0)
    options = {};
  {
    assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store2, "store must be called with the new operator.");
  }
  var plugins = options.plugins;
  if (plugins === void 0)
    plugins = [];
  var strict = options.strict;
  if (strict === void 0)
    strict = false;
  var devtools = options.devtools;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  this._devtools = devtools;
  var store = this;
  var ref2 = this;
  var dispatch2 = ref2.dispatch;
  var commit2 = ref2.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch2.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options2) {
    return commit2.call(store, type, payload, options2);
  };
  this.strict = strict;
  var state = this._modules.root.state;
  installModule(this, state, [], this._modules.root);
  resetStoreState(this, state);
  plugins.forEach(function(plugin2) {
    return plugin2(this$1$1);
  });
};
var prototypeAccessors = { state: { configurable: true } };
Store.prototype.install = function install(app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;
  this._devtools !== void 0 ? this._devtools : true;
};
prototypeAccessors.state.get = function() {
  return this._state.data;
};
prototypeAccessors.state.set = function(v) {
  {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload, _options);
  var type = ref2.type;
  var payload = ref2.payload;
  var options = ref2.options;
  var mutation = { type, payload };
  var entry = this._mutations[type];
  if (!entry) {
    {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function() {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice().forEach(function(sub) {
    return sub(mutation, this$1$1.state);
  });
  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
    );
  }
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload);
  var type = ref2.type;
  var payload = ref2.payload;
  var action = { type, payload };
  var entry = this._actions[type];
  if (!entry) {
    {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(sub) {
      return sub.before;
    }).forEach(function(sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e2) {
    {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e2);
    }
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function(resolve2, reject) {
    result.then(function(res) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.after;
        }).forEach(function(sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e2) {
        {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e2);
        }
      }
      resolve2(res);
    }, function(error) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.error;
        }).forEach(function(sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e2) {
        {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e2);
        }
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === "function" ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch$1(getter, cb, options) {
  var this$1$1 = this;
  {
    assert(typeof getter === "function", "store.watch only accepts a function.");
  }
  return watch(function() {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, Object.assign({}, options));
};
Store.prototype.replaceState = function replaceState(state) {
  var this$1$1 = this;
  this._withCommit(function() {
    this$1$1._state.data = state;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0)
    options = {};
  if (typeof path === "string") {
    path = [path];
  }
  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, "cannot register the root module by using registerModule.");
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  resetStoreState(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;
  if (typeof path === "string") {
    path = [path];
  }
  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  this._modules.unregister(path);
  this._withCommit(function() {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === "string") {
    path = [path];
  }
  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors);
var uniSimpleRouter = { exports: {} };
(function(module, exports2) {
  !function(e2, t2) {
    module.exports = t2();
  }(self, function() {
    return e2 = { 779: (e3, t3, r) => {
      var o2 = r(173);
      e3.exports = function e4(t4, r2, n3) {
        return o2(r2) || (n3 = r2 || n3, r2 = []), n3 = n3 || {}, t4 instanceof RegExp ? function(e5, t5) {
          var r3 = e5.source.match(/\((?!\?)/g);
          if (r3)
            for (var o3 = 0; o3 < r3.length; o3++)
              t5.push({ name: o3, prefix: null, delimiter: null, optional: false, repeat: false, partial: false, asterisk: false, pattern: null });
          return s(e5, t5);
        }(t4, r2) : o2(t4) ? function(t5, r3, o3) {
          for (var n4 = [], a2 = 0; a2 < t5.length; a2++)
            n4.push(e4(t5[a2], r3, o3).source);
          return s(new RegExp("(?:" + n4.join("|") + ")", p2(o3)), r3);
        }(t4, r2, n3) : function(e5, t5, r3) {
          return f2(a(e5, r3), t5, r3);
        }(t4, r2, n3);
      }, e3.exports.parse = a, e3.exports.compile = function(e4, t4) {
        return u(a(e4, t4), t4);
      }, e3.exports.tokensToFunction = u, e3.exports.tokensToRegExp = f2;
      var n2 = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
      function a(e4, t4) {
        for (var r2, o3 = [], a2 = 0, i2 = 0, u2 = "", s2 = t4 && t4.delimiter || "/"; null != (r2 = n2.exec(e4)); ) {
          var p3 = r2[0], f3 = r2[1], h = r2.index;
          if (u2 += e4.slice(i2, h), i2 = h + p3.length, f3)
            u2 += f3[1];
          else {
            var v = e4[i2], y = r2[2], g = r2[3], d = r2[4], m = r2[5], b = r2[6], P = r2[7];
            u2 && (o3.push(u2), u2 = "");
            var O = null != y && null != v && v !== y, k = "+" === b || "*" === b, w = "?" === b || "*" === b, j = r2[2] || s2, R = d || m;
            o3.push({ name: g || a2++, prefix: y || "", delimiter: j, optional: w, repeat: k, partial: O, asterisk: !!P, pattern: R ? c(R) : P ? ".*" : "[^" + l(j) + "]+?" });
          }
        }
        return i2 < e4.length && (u2 += e4.substr(i2)), u2 && o3.push(u2), o3;
      }
      function i(e4) {
        return encodeURI(e4).replace(/[\/?#]/g, function(e5) {
          return "%" + e5.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function u(e4, t4) {
        for (var r2 = new Array(e4.length), n3 = 0; n3 < e4.length; n3++)
          "object" == typeof e4[n3] && (r2[n3] = new RegExp("^(?:" + e4[n3].pattern + ")$", p2(t4)));
        return function(t5, n4) {
          for (var a2 = "", u2 = t5 || {}, l2 = (n4 || {}).pretty ? i : encodeURIComponent, c2 = 0; c2 < e4.length; c2++) {
            var s2 = e4[c2];
            if ("string" != typeof s2) {
              var p3, f3 = u2[s2.name];
              if (null == f3) {
                if (s2.optional) {
                  s2.partial && (a2 += s2.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + s2.name + '" to be defined');
              }
              if (o2(f3)) {
                if (!s2.repeat)
                  throw new TypeError('Expected "' + s2.name + '" to not repeat, but received `' + JSON.stringify(f3) + "`");
                if (0 === f3.length) {
                  if (s2.optional)
                    continue;
                  throw new TypeError('Expected "' + s2.name + '" to not be empty');
                }
                for (var h = 0; h < f3.length; h++) {
                  if (p3 = l2(f3[h]), !r2[c2].test(p3))
                    throw new TypeError('Expected all "' + s2.name + '" to match "' + s2.pattern + '", but received `' + JSON.stringify(p3) + "`");
                  a2 += (0 === h ? s2.prefix : s2.delimiter) + p3;
                }
              } else {
                if (p3 = s2.asterisk ? encodeURI(f3).replace(/[?#]/g, function(e5) {
                  return "%" + e5.charCodeAt(0).toString(16).toUpperCase();
                }) : l2(f3), !r2[c2].test(p3))
                  throw new TypeError('Expected "' + s2.name + '" to match "' + s2.pattern + '", but received "' + p3 + '"');
                a2 += s2.prefix + p3;
              }
            } else
              a2 += s2;
          }
          return a2;
        };
      }
      function l(e4) {
        return e4.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function c(e4) {
        return e4.replace(/([=!:$\/()])/g, "\\$1");
      }
      function s(e4, t4) {
        return e4.keys = t4, e4;
      }
      function p2(e4) {
        return e4 && e4.sensitive ? "" : "i";
      }
      function f2(e4, t4, r2) {
        o2(t4) || (r2 = t4 || r2, t4 = []);
        for (var n3 = (r2 = r2 || {}).strict, a2 = false !== r2.end, i2 = "", u2 = 0; u2 < e4.length; u2++) {
          var c2 = e4[u2];
          if ("string" == typeof c2)
            i2 += l(c2);
          else {
            var f3 = l(c2.prefix), h = "(?:" + c2.pattern + ")";
            t4.push(c2), c2.repeat && (h += "(?:" + f3 + h + ")*"), i2 += h = c2.optional ? c2.partial ? f3 + "(" + h + ")?" : "(?:" + f3 + "(" + h + "))?" : f3 + "(" + h + ")";
          }
        }
        var v = l(r2.delimiter || "/"), y = i2.slice(-v.length) === v;
        return n3 || (i2 = (y ? i2.slice(0, -v.length) : i2) + "(?:" + v + "(?=$))?"), i2 += a2 ? "$" : n3 && y ? "" : "(?=" + v + "|$)", s(new RegExp("^" + i2, p2(r2)), t4);
      }
    }, 173: (e3) => {
      e3.exports = Array.isArray || function(e4) {
        return "[object Array]" == Object.prototype.toString.call(e4);
      };
    }, 844: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.buildVueRouter = t3.buildVueRoutes = void 0;
      var n2 = r(366), a = r(883), i = r(789), u = r(169);
      t3.buildVueRoutes = function(e4, t4) {
        for (var r2 = e4.routesMap, o3 = r2.pathMap, l = r2.finallyPathList, c = Object.keys(t4), s = 0; s < c.length; s++) {
          var p2 = c[s], f2 = o3[p2], h = t4[p2];
          if (f2) {
            var v = i.getRoutePath(f2, e4).finallyPath;
            if (v instanceof Array)
              throw new Error("\u975E vueRouterDev \u6A21\u5F0F\u4E0B\uFF0Calias\u3001aliasPath\u3001path \u65E0\u6CD5\u63D0\u4F9B\u6570\u7EC4\u7C7B\u578B\uFF01 " + JSON.stringify(f2));
            null != f2.name && (h.name = f2.name);
            var y = h.path, g = h.alias;
            delete h.alias, h.path = v, "/" === y && null != g && (h.alias = g, h.path = y), f2.beforeEnter && (h.beforeEnter = function(t5, r3, o4) {
              u.onTriggerEachHook(t5, r3, e4, n2.hookToggle.enterHooks, o4);
            });
          } else
            a.warn(p2 + " \u8DEF\u7531\u5730\u5740\u5728\u8DEF\u7531\u8868\u4E2D\u672A\u627E\u5230\uFF0C\u786E\u5B9A\u662F\u5426\u4F20\u9012\u6F0F\u5566", e4, true);
        }
        return l.includes("*") && (t4["*"] = o3["*"]), t4;
      }, t3.buildVueRouter = function(e4, t4, r2) {
        var n3;
        n3 = "[object Array]" === i.getDataType(r2) ? r2 : Object.values(r2);
        var a2 = e4.options.h5, u2 = a2.scrollBehavior, l = a2.fallback, c = t4.options.scrollBehavior;
        t4.options.scrollBehavior = function(e5, t5, r3) {
          return c && c(e5, t5, r3), u2(e5, t5, r3);
        }, t4.fallback = l;
        var s = new t4.constructor(o2(o2({}, e4.options.h5), { base: t4.options.base, mode: t4.options.mode, routes: n3 }));
        t4.matcher = s.matcher;
      };
    }, 369: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.addKeepAliveInclude = void 0;
      var o2 = r(789), n2 = ["", ""], a = n2[0], i = n2[1];
      t3.addKeepAliveInclude = function(e4) {
        var t4 = getApp(), r2 = t4.keepAliveInclude;
        if (0 === e4.runId && 0 === r2.length) {
          i = t4.$route.params.__id__;
          var n3 = (a = t4.$route.meta.name) + "-" + i;
          t4.keepAliveInclude.push(n3);
        } else if ("" !== a)
          for (var u = t4.keepAliveInclude, l = 0; l < u.length; l++) {
            n3 = u[l];
            var c = new RegExp(a + "-(\\d+)$"), s = a + "-" + i;
            if (c.test(n3) && n3 !== s) {
              o2.removeSimpleValue(u, s), a = "";
              break;
            }
          }
      };
    }, 147: function(e3, t3) {
      var r, o2 = this && this.__extends || (r = function(e4, t4) {
        return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e5, t5) {
          e5.__proto__ = t5;
        } || function(e5, t5) {
          for (var r2 in t5)
            Object.prototype.hasOwnProperty.call(t5, r2) && (e5[r2] = t5[r2]);
        })(e4, t4);
      }, function(e4, t4) {
        function o3() {
          this.constructor = e4;
        }
        r(e4, t4), e4.prototype = null === t4 ? Object.create(t4) : (o3.prototype = t4.prototype, new o3());
      });
      Object.defineProperty(t3, "__esModule", { value: true }), t3.proxyH5Mount = t3.proxyEachHook = t3.MyArray = void 0;
      var n2 = function(e4) {
        function t4(r2, o3, n3, a) {
          var i = e4.call(this) || this;
          return i.router = r2, i.vueEachArray = o3, i.myEachHook = n3, i.hookName = a, Object.setPrototypeOf(i, t4.prototype), i;
        }
        return o2(t4, e4), t4.prototype.push = function(e5) {
          var t5 = this;
          this.vueEachArray.push(e5);
          var r2 = this.length;
          this[this.length] = function(e6, o3, n3) {
            r2 > 0 ? t5.vueEachArray[r2](e6, o3, function() {
              n3 && n3();
            }) : t5.myEachHook(e6, o3, function(a) {
              false === a ? n3(false) : t5.vueEachArray[r2](e6, o3, function(e7) {
                n3(a);
              });
            }, t5.router, true);
          };
        }, t4;
      }(Array);
      t3.MyArray = n2, t3.proxyEachHook = function(e4, t4) {
        for (var r2 = ["beforeHooks", "afterHooks"], o3 = 0; o3 < r2.length; o3++) {
          var a = r2[o3], i = e4.lifeCycle[a][0];
          if (i) {
            var u = t4[a];
            t4[a] = new n2(e4, u, i, a);
          }
        }
      }, t3.proxyH5Mount = function(e4) {
        var t4;
        if (0 === e4.mount.length) {
          if (null === (t4 = e4.options.h5) || void 0 === t4 ? void 0 : t4.vueRouterDev)
            return;
          navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && setTimeout(function() {
            if (document.getElementsByTagName("uni-page").length > 0)
              return false;
            window.location.reload();
          }, 0);
        } else
          e4.mount[0].app.$mount(), e4.mount = [];
      };
    }, 814: function(e3, t3) {
      var r = this && this.__assign || function() {
        return (r = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.tabIndexSelect = t3.HomeNvueSwitchTab = t3.runtimeQuit = t3.registerLoddingPage = void 0;
      var o2 = null, n2 = null;
      t3.registerLoddingPage = function(e4) {
        var t4;
        if (null === (t4 = e4.options.APP) || void 0 === t4 ? void 0 : t4.registerLoadingPage) {
          var o3 = e4.options.APP, n3 = o3.loadingPageHook, a = o3.loadingPageStyle;
          n3(new plus.nativeObj.View("router-loadding", r({ top: "0px", left: "0px", height: "100%", width: "100%" }, a())));
        }
      }, t3.runtimeQuit = function(e4) {
        void 0 === e4 && (e4 = "\u518D\u6309\u4E00\u6B21\u9000\u51FA\u5E94\u7528");
        var t4 = +new Date();
        o2 ? t4 - o2 < 1e3 && plus.runtime.quit() : (o2 = t4, index.showToast({ title: e4, icon: "none", position: "bottom", duration: 1e3 }), setTimeout(function() {
          o2 = null;
        }, 1e3));
      }, t3.HomeNvueSwitchTab = function(e4, t4, r2) {
        return new Promise(function(t5) {
          return 0 !== e4.runId ? t5(false) : __uniConfig.tabBar && Array.isArray(__uniConfig.tabBar.list) ? void r2({ url: __uniConfig.entryPagePath, animationDuration: 0, complete: function() {
            return t5(true);
          } }) : t5(false);
        });
      }, t3.tabIndexSelect = function(e4, t4) {
        if (!__uniConfig.tabBar || !Array.isArray(__uniConfig.tabBar.list))
          return false;
        for (var r2 = __uniConfig.tabBar.list, o3 = [], a = 0, i = 0; i < r2.length; i++) {
          var u = r2[i];
          if ("/" + u.pagePath !== e4.path && "/" + u.pagePath !== t4.path || (u.pagePath === t4.path && (a = i), o3.push(u)), 2 === o3.length)
            break;
        }
        return 2 === o3.length && (null == n2 && (n2 = index.requireNativePlugin("uni-tabview")), n2.switchSelect({ index: a }), true);
      };
    }, 334: (e3, t3) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.getEnterPath = void 0, t3.getEnterPath = function(e4, t4) {
        switch (t4.options.platform) {
          case "mp-alipay":
          case "mp-weixin":
          case "mp-toutiao":
          case "mp-qq":
            return e4.$options.mpInstance.route;
          case "mp-baidu":
            return e4.$options.mpInstance.is || e4.$options.mpInstance.pageinstance.route;
        }
        return e4.$options.mpInstance.route;
      };
    }, 282: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.proxyHookName = t3.proxyHookDeps = t3.lifeCycle = t3.baseConfig = t3.mpPlatformReg = void 0;
      var o2 = r(883), n2 = r(99);
      t3.mpPlatformReg = "(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)", t3.baseConfig = { h5: { paramsToQuery: false, vueRouterDev: false, vueNext: false, mode: "hash", base: "/", linkActiveClass: "router-link-active", linkExactActiveClass: "router-link-exact-active", scrollBehavior: function(e4, t4, r2) {
        return { x: 0, y: 0 };
      }, fallback: true }, APP: { registerLoadingPage: true, loadingPageStyle: function() {
        return JSON.parse('{"backgroundColor":"#FFF"}');
      }, loadingPageHook: function(e4) {
        e4.show();
      }, launchedHook: function() {
        plus.navigator.closeSplashscreen();
      }, animation: {} }, applet: { animationDuration: 300 }, beforeProxyHooks: { onLoad: function(e4, t4, r2) {
        var o3 = e4[0];
        t4([n2.parseQuery({ query: o3 }, r2)]);
      } }, platform: "h5", keepUniOriginNav: false, debugger: false, routerBeforeEach: function(e4, t4, r2) {
        r2();
      }, routerAfterEach: function(e4, t4) {
      }, routerErrorEach: function(e4, t4) {
        t4.$lockStatus = false, o2.err(e4, t4, true);
      }, detectBeforeLock: function(e4, t4, r2) {
      }, routes: [{ path: "/choose-location" }, { path: "/open-location" }, { path: "/preview-image" }] }, t3.lifeCycle = { beforeHooks: [], afterHooks: [], routerBeforeHooks: [], routerAfterHooks: [], routerErrorHooks: [] }, t3.proxyHookDeps = { resetIndex: [], hooks: {}, options: {} }, t3.proxyHookName = ["onLaunch", "onShow", "onHide", "onError", "onInit", "onLoad", "onReady", "onUnload", "onResize", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed"];
    }, 801: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.createRouteMap = void 0;
      var o2 = r(883), n2 = r(789);
      t3.createRouteMap = function(e4, t4) {
        var r2 = { finallyPathList: [], finallyPathMap: /* @__PURE__ */ Object.create(null), aliasPathMap: /* @__PURE__ */ Object.create(null), pathMap: /* @__PURE__ */ Object.create(null), vueRouteMap: /* @__PURE__ */ Object.create(null), nameMap: /* @__PURE__ */ Object.create(null) };
        return t4.forEach(function(t5) {
          var a = n2.getRoutePath(t5, e4), i = a.finallyPath, u = a.aliasPath, l = a.path;
          if (null == l)
            throw new Error("\u8BF7\u63D0\u4F9B\u4E00\u4E2A\u5B8C\u6574\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u5305\u62EC\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u5F00\u59CB\u7684 \u2018path\u2019 \u5B57\u7B26\u4E32 " + JSON.stringify(t5));
          if (i instanceof Array && !e4.options.h5.vueRouterDev && "h5" === e4.options.platform)
            throw new Error("\u975E vueRouterDev \u6A21\u5F0F\u4E0B\uFF0Croute.alias \u76EE\u524D\u65E0\u6CD5\u63D0\u4F9B\u6570\u7EC4\u7C7B\u578B\uFF01 " + JSON.stringify(t5));
          var c = i, s = u;
          "h5" !== e4.options.platform && 0 !== c.indexOf("/") && "*" !== l && o2.warn("\u5F53\u524D\u8DEF\u7531\u5BF9\u8C61\u4E0B\uFF0Croute\uFF1A" + JSON.stringify(t5) + " \u662F\u5426\u7F3A\u5C11\u4E86\u524D\u7F00 \u2018/\u2019", e4, true), r2.finallyPathMap[c] || (r2.finallyPathMap[c] = t5, r2.aliasPathMap[s] = t5, r2.pathMap[l] = t5, r2.finallyPathList.push(c), null != t5.name && (r2.nameMap[t5.name] = t5));
        }), r2;
      };
    }, 662: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.registerEachHooks = t3.registerRouterHooks = t3.registerHook = void 0;
      var o2 = r(366), n2 = r(169);
      function a(e4, t4) {
        e4[0] = t4;
      }
      t3.registerHook = a, t3.registerRouterHooks = function(e4, t4) {
        return a(e4.routerBeforeHooks, function(e5, r2, o3) {
          t4.routerBeforeEach(e5, r2, o3);
        }), a(e4.routerAfterHooks, function(e5, r2) {
          t4.routerAfterEach(e5, r2);
        }), a(e4.routerErrorHooks, function(e5, r2) {
          t4.routerErrorEach(e5, r2);
        }), e4;
      }, t3.registerEachHooks = function(e4, t4, r2) {
        a(e4.lifeCycle[t4], function(e5, a2, i, u, l) {
          l ? n2.onTriggerEachHook(e5, a2, u, o2.hookToggle[t4], i) : r2(e5, a2, i);
        });
      };
    }, 460: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.initMixins = t3.getMixins = void 0;
      var n2 = r(801), a = r(844), i = r(147), u = r(814), l = r(845), c = r(890), s = r(789), p2 = r(334), f2 = r(282), h = r(925), v = false, y = false, g = { app: false, page: "" };
      function d(e4, t4) {
        var r2 = t4.options.platform;
        return new RegExp(f2.mpPlatformReg, "g").test(r2) && (r2 = "app-lets"), { h5: { beforeCreate: function() {
          var e5;
          if (h.beforeProxyHook(this, t4), this.$options.router) {
            t4.$route = this.$options.router;
            var r3 = [];
            (null === (e5 = t4.options.h5) || void 0 === e5 ? void 0 : e5.vueRouterDev) ? r3 = t4.options.routes : (r3 = n2.createRouteMap(t4, this.$options.router.options.routes).finallyPathMap, t4.routesMap.vueRouteMap = r3, a.buildVueRoutes(t4, r3)), a.buildVueRouter(t4, this.$options.router, r3), i.proxyEachHook(t4, this.$options.router);
          }
        } }, "app-plus": { beforeCreate: function() {
          h.beforeProxyHook(this, t4), v || (v = true, l.proxyPageHook(this, t4, "app"), u.registerLoddingPage(t4));
        } }, "app-lets": { beforeCreate: function() {
          h.beforeProxyHook(this, t4), s.voidFun("UNI-SIMPLE-ROUTER");
          var e5 = true, r3 = this.$options.mpType;
          y || ("component" === r3 ? e5 = s.assertParentChild(g.page, this) : "page" === r3 ? (g[r3] = p2.getEnterPath(this, t4), t4.enterPath = g[r3]) : g[r3] = true, e5 && l.proxyPageHook(this, t4, r3));
        }, onLoad: function() {
          s.voidFun("UNI-SIMPLE-ROUTER"), !y && s.assertParentChild(g.page, this) && (y = true, c.forceGuardEach(t4));
        } } }[r2];
      }
      t3.getMixins = d, t3.initMixins = function(e4, t4) {
        var r2 = n2.createRouteMap(t4, t4.options.routes);
        t4.routesMap = r2, e4.mixin(o2({}, d(0, t4)));
      };
    }, 789: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      }, n2 = this && this.__rest || function(e4, t4) {
        var r2 = {};
        for (var o3 in e4)
          Object.prototype.hasOwnProperty.call(e4, o3) && t4.indexOf(o3) < 0 && (r2[o3] = e4[o3]);
        if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (o3 = Object.getOwnPropertySymbols(e4); n3 < o3.length; n3++)
            t4.indexOf(o3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[n3]) && (r2[o3[n3]] = e4[o3[n3]]);
        }
        return r2;
      }, a = this && this.__spreadArrays || function() {
        for (var e4 = 0, t4 = 0, r2 = arguments.length; t4 < r2; t4++)
          e4 += arguments[t4].length;
        var o3 = Array(e4), n3 = 0;
        for (t4 = 0; t4 < r2; t4++)
          for (var a2 = arguments[t4], i2 = 0, u2 = a2.length; i2 < u2; i2++, n3++)
            o3[n3] = a2[i2];
        return o3;
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.deepDecodeQuery = t3.resolveAbsolutePath = t3.assertParentChild = t3.lockDetectWarn = t3.deepClone = t3.baseClone = t3.assertDeepObject = t3.paramsToQuery = t3.forMatNextToFrom = t3.urlToJson = t3.getUniCachePage = t3.removeSimpleValue = t3.copyData = t3.getDataType = t3.routesForMapRoute = t3.notRouteTo404 = t3.getWildcardRule = t3.assertNewOptions = t3.getRoutePath = t3.notDeepClearNull = t3.mergeConfig = t3.timeOut = t3.def = t3.voidFun = void 0;
      var i = r(282), u = r(169), l = r(883), c = r(890), s = r(779);
      function p2(e4, t4) {
        for (var r2 = /* @__PURE__ */ Object.create(null), n3 = Object.keys(e4).concat(["resolveQuery", "parseQuery"]), i2 = 0; i2 < n3.length; i2 += 1) {
          var u2 = n3[i2];
          null != t4[u2] ? t4[u2].constructor === Object ? r2[u2] = o2(o2({}, e4[u2]), t4[u2]) : r2[u2] = "routes" === u2 ? a(e4[u2], t4[u2]) : t4[u2] : r2[u2] = e4[u2];
        }
        return r2;
      }
      function f2(e4, t4) {
        var r2 = e4.aliasPath || e4.alias || e4.path;
        return "h5" !== t4.options.platform && (r2 = e4.path), { finallyPath: r2, aliasPath: e4.aliasPath || e4.path, path: e4.path, alias: e4.alias };
      }
      function h(e4, t4) {
        var r2 = e4.routesMap.finallyPathMap["*"];
        if (r2)
          return r2;
        throw t4 && u.ERRORHOOK[0](t4, e4), new Error("\u5F53\u524D\u8DEF\u7531\u8868\u5339\u914D\u89C4\u5219\u5DF2\u5168\u90E8\u5339\u914D\u5B8C\u6210\uFF0C\u672A\u627E\u5230\u6EE1\u8DB3\u7684\u5339\u914D\u89C4\u5219\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 '*' \u901A\u914D\u7B26\u6355\u6349\u6700\u540E\u7684\u5F02\u5E38");
      }
      function v(e4) {
        return Object.prototype.toString.call(e4);
      }
      function y(e4, t4) {
        if (null == e4)
          t4 = e4;
        else
          for (var r2 = 0, o3 = Object.keys(e4); r2 < o3.length; r2++) {
            var n3 = o3[r2], a2 = n3;
            e4[n3] !== e4 && ("object" == typeof e4[n3] ? (t4[a2] = "[object Array]" === v(e4[n3]) ? [] : {}, t4[a2] = y(e4[n3], t4[a2])) : t4[a2] = e4[n3]);
          }
        return t4;
      }
      function g(e4) {
        var t4 = "[object Array]" === v(e4) ? [] : {};
        return y(e4, t4), t4;
      }
      t3.voidFun = function() {
        for (var e4 = [], t4 = 0; t4 < arguments.length; t4++)
          e4[t4] = arguments[t4];
      }, t3.def = function(e4, t4, r2) {
        Object.defineProperty(e4, t4, { get: function() {
          return r2();
        } });
      }, t3.timeOut = function(e4) {
        return new Promise(function(t4) {
          setTimeout(function() {
            t4();
          }, e4);
        });
      }, t3.mergeConfig = p2, t3.notDeepClearNull = function(e4) {
        for (var t4 in e4)
          null == e4[t4] && delete e4[t4];
        return e4;
      }, t3.getRoutePath = f2, t3.assertNewOptions = function(e4) {
        var t4, r2 = e4.platform, o3 = e4.routes;
        if (null == r2)
          throw new Error("\u4F60\u5728\u5B9E\u4F8B\u5316\u8DEF\u7531\u65F6\u5FC5\u987B\u4F20\u9012 'platform'");
        if (null == o3 || 0 === o3.length)
          throw new Error("\u4F60\u5728\u5B9E\u4F8B\u5316\u8DEF\u7531\u65F6\u5FC5\u987B\u4F20\u9012 routes \u4E3A\u7A7A\uFF0C\u8FD9\u662F\u65E0\u610F\u4E49\u7684\u3002");
        return "h5" === e4.platform && (null === (t4 = e4.h5) || void 0 === t4 ? void 0 : t4.vueRouterDev) && (i.baseConfig.routes = []), p2(i.baseConfig, e4);
      }, t3.getWildcardRule = h, t3.notRouteTo404 = function(e4, t4, r2, o3) {
        if ("*" !== t4.path)
          return t4;
        var n3 = t4.redirect;
        if (void 0 === n3)
          throw new Error(" *  \u901A\u914D\u7B26\u5FC5\u987B\u914D\u5408 redirect \u4F7F\u7528\u3002redirect: string | Location | Function");
        var a2 = n3;
        return "function" == typeof a2 && (a2 = a2(r2)), c.navjump(a2, e4, o3, void 0, void 0, void 0, false);
      }, t3.routesForMapRoute = function e4(t4, r2, o3, n3) {
        var a2;
        if (void 0 === n3 && (n3 = false), null === (a2 = t4.options.h5) || void 0 === a2 ? void 0 : a2.vueRouterDev)
          return { path: r2 };
        for (var i2 = r2.split("?")[0], u2 = "", l2 = t4.routesMap, c2 = 0; c2 < o3.length; c2++)
          for (var p3 = l2[o3[c2]], f3 = 0, y2 = Object.entries(p3); f3 < y2.length; f3++) {
            var g2 = y2[f3], d = g2[0], m = g2[1];
            if ("*" !== d) {
              var b = m, P = d;
              if ("[object Array]" === v(p3) && (P = b), null != s(P).exec(i2))
                return "[object String]" === v(b) ? l2.finallyPathMap[b] : b;
            } else
              "" === u2 && (u2 = "*");
          }
        if (n3)
          return {};
        if (l2.aliasPathMap) {
          var O = e4(t4, r2, ["aliasPathMap"], true);
          if (Object.keys(O).length > 0)
            return O;
        }
        if ("" !== u2)
          return h(t4);
        throw new Error(r2 + " \u8DEF\u5F84\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01\u68C0\u67E5\u8DF3\u8F6C\u8DEF\u5F84\u53CA\u8DEF\u7531\u8868");
      }, t3.getDataType = v, t3.copyData = function(e4) {
        return JSON.parse(JSON.stringify(e4));
      }, t3.removeSimpleValue = function(e4, t4) {
        for (var r2 = 0; r2 < e4.length; r2++)
          if (e4[r2] === t4)
            return e4.splice(r2, 1), true;
        return false;
      }, t3.getUniCachePage = function(e4) {
        var t4 = getCurrentPages();
        if (null == e4)
          return t4;
        if (0 === t4.length)
          return t4;
        var r2 = t4.reverse()[e4];
        return null == r2 ? [] : r2;
      }, t3.urlToJson = function(e4) {
        var t4 = {}, r2 = e4.split("?"), o3 = r2[0], n3 = r2[1];
        if (null != n3)
          for (var a2 = 0, i2 = n3.split("&"); a2 < i2.length; a2++) {
            var u2 = i2[a2].split("=");
            t4[u2[0]] = u2[1];
          }
        return { path: o3, query: t4 };
      }, t3.forMatNextToFrom = function(e4, t4, r2) {
        var o3 = [t4, r2], n3 = o3[0], a2 = o3[1];
        if ("h5" === e4.options.platform) {
          var i2 = e4.options.h5, u2 = i2.vueNext, l2 = i2.vueRouterDev;
          u2 || l2 || (n3 = c.createRoute(e4, void 0, n3), a2 = c.createRoute(e4, void 0, a2));
        } else
          n3 = c.createRoute(e4, void 0, g(n3)), a2 = c.createRoute(e4, void 0, g(a2));
        return { matTo: n3, matFrom: a2 };
      }, t3.paramsToQuery = function(e4, t4) {
        var r2;
        if ("h5" === e4.options.platform && !(null === (r2 = e4.options.h5) || void 0 === r2 ? void 0 : r2.paramsToQuery))
          return t4;
        if ("[object Object]" === v(t4)) {
          var a2 = t4, i2 = a2.name, l2 = a2.params, c2 = n2(a2, ["name", "params"]), s2 = l2;
          if ("h5" !== e4.options.platform && null == s2 && (s2 = {}), null != i2 && null != s2) {
            var p3 = e4.routesMap.nameMap[i2];
            null == p3 && (p3 = h(e4, { type: 2, msg: "\u547D\u540D\u8DEF\u7531\u4E3A\uFF1A" + i2 + " \u7684\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01", toRule: t4 }));
            var y2 = f2(p3, e4).finallyPath;
            if (!y2.includes(":"))
              return o2(o2({}, c2), { path: y2, query: s2 });
            u.ERRORHOOK[0]({ type: 2, msg: "\u52A8\u6001\u8DEF\u7531\uFF1A" + y2 + " \u65E0\u6CD5\u4F7F\u7528 paramsToQuery\uFF01", toRule: t4 }, e4);
          }
        }
        return t4;
      }, t3.assertDeepObject = function(e4) {
        var t4 = null;
        try {
          t4 = JSON.stringify(e4).match(/\{|\[|\}|\]/g);
        } catch (e5) {
          l.warnLock("\u4F20\u9012\u7684\u53C2\u6570\u89E3\u6790\u5BF9\u8C61\u5931\u8D25\u3002" + e5);
        }
        return null != t4 && t4.length > 3;
      }, t3.baseClone = y, t3.deepClone = g, t3.lockDetectWarn = function(e4, t4, r2, o3, n3, a2) {
        if (void 0 === n3 && (n3 = {}), "afterHooks" === a2)
          o3();
        else {
          var i2 = e4.options.detectBeforeLock;
          i2 && i2(e4, t4, r2), e4.$lockStatus ? e4.options.routerErrorEach({ type: 2, msg: "\u5F53\u524D\u9875\u9762\u6B63\u5728\u5904\u4E8E\u8DF3\u8F6C\u72B6\u6001\uFF0C\u8BF7\u7A0D\u540E\u518D\u8FDB\u884C\u8DF3\u8F6C....", NAVTYPE: r2, uniActualData: n3 }, e4) : o3();
        }
      }, t3.assertParentChild = function(e4, t4) {
        for (; null != t4.$parent; ) {
          var r2 = t4.$parent.$mp;
          if (r2.page && r2.page.is === e4)
            return true;
          t4 = t4.$parent;
        }
        try {
          if (t4.$mp.page.is === e4 || t4.$mp.page.route === e4)
            return true;
        } catch (e5) {
          return false;
        }
        return false;
      }, t3.resolveAbsolutePath = function(e4, t4) {
        var r2 = /^\/?([^\?\s]+)(\?.+)?$/, o3 = e4.trim();
        if (!r2.test(o3))
          throw new Error("\u3010" + e4 + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u8BF7\u63D0\u4F9B\u5B8C\u6574\u7684\u8DEF\u5F84(10001)\u3002");
        var n3 = o3.match(r2);
        if (null == n3)
          throw new Error("\u3010" + e4 + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u8BF7\u63D0\u4F9B\u5B8C\u6574\u7684\u8DEF\u5F84(10002)\u3002");
        var a2 = n3[2] || "";
        if (/^\.\/[^\.]+/.test(o3))
          return (t4.currentRoute.path + e4).replace(/[^\/]+\.\//, "");
        var i2 = n3[1].replace(/\//g, "\\/").replace(/\.\./g, "[^\\/]+").replace(/\./g, "\\."), u2 = new RegExp("^\\/" + i2 + "$"), l2 = t4.options.routes.filter(function(e5) {
          return u2.test(e5.path);
        });
        if (1 !== l2.length)
          throw new Error("\u3010" + e4 + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u5C1D\u8BD5\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84(10003)\u3002");
        return l2[0].path + a2;
      }, t3.deepDecodeQuery = function e4(t4) {
        for (var r2 = "[object Array]" === v(t4) ? [] : {}, o3 = Object.keys(t4), n3 = 0; n3 < o3.length; n3++) {
          var a2 = o3[n3], i2 = t4[a2];
          if ("string" == typeof i2)
            try {
              var u2 = JSON.parse(decodeURIComponent(i2));
              "object" != typeof u2 && (u2 = i2), r2[a2] = u2;
            } catch (e5) {
              try {
                r2[a2] = decodeURIComponent(i2);
              } catch (e6) {
                r2[a2] = i2;
              }
            }
          else if ("object" == typeof i2) {
            var l2 = e4(i2);
            r2[a2] = l2;
          } else
            r2[a2] = i2;
        }
        return r2;
      };
    }, 883: (e3, t3) => {
      function r(e4, t4, r2, o2) {
        if (void 0 === o2 && (o2 = false), !o2) {
          var n2 = "[object Object]" === t4.toString();
          if (false === t4)
            return false;
          if (n2 && false === t4[e4])
            return false;
        }
        return console[e4](r2), true;
      }
      Object.defineProperty(t3, "__esModule", { value: true }), t3.warnLock = t3.log = t3.warn = t3.err = t3.isLog = void 0, t3.isLog = r, t3.err = function(e4, t4, o2) {
        r("error", t4.options.debugger, e4, o2);
      }, t3.warn = function(e4, t4, o2) {
        r("warn", t4.options.debugger, e4, o2);
      }, t3.log = function(e4, t4, o2) {
        r("log", t4.options.debugger, e4, o2);
      }, t3.warnLock = function(e4) {
        console.warn(e4);
      };
    }, 607: function(e3, t3, r) {
      var o2 = this && this.__createBinding || (Object.create ? function(e4, t4, r2, o3) {
        void 0 === o3 && (o3 = r2), Object.defineProperty(e4, o3, { enumerable: true, get: function() {
          return t4[r2];
        } });
      } : function(e4, t4, r2, o3) {
        void 0 === o3 && (o3 = r2), e4[o3] = t4[r2];
      }), n2 = this && this.__exportStar || function(e4, t4) {
        for (var r2 in e4)
          "default" === r2 || Object.prototype.hasOwnProperty.call(t4, r2) || o2(t4, e4, r2);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.createRouter = t3.RouterMount = t3.runtimeQuit = void 0, n2(r(366), t3), n2(r(309), t3), n2(r(789), t3);
      var a = r(814);
      Object.defineProperty(t3, "runtimeQuit", { enumerable: true, get: function() {
        return a.runtimeQuit;
      } });
      var i = r(963);
      Object.defineProperty(t3, "RouterMount", { enumerable: true, get: function() {
        return i.RouterMount;
      } }), Object.defineProperty(t3, "createRouter", { enumerable: true, get: function() {
        return i.createRouter;
      } });
      var u = "2.0.8-BETA.4";
      /[A-Z]/g.test(u) && console.warn("\u3010" + "UNI-SIMPLE-ROUTER".toLocaleLowerCase() + " \u63D0\u793A\u3011\uFF1A\u5F53\u524D\u7248\u672C " + u.toLocaleLowerCase() + " \u6B64\u7248\u672C\u4E3A\u6D4B\u8BD5\u7248\u3002\u6709BUG\u8BF7\u9000\u56DE\u6B63\u5F0F\u7248\uFF0C\u7EBF\u4E0A\u6B63\u5F0F\u7248\u672C\uFF1A2.0.7");
    }, 366: (e3, t3) => {
      var r, o2, n2;
      Object.defineProperty(t3, "__esModule", { value: true }), t3.rewriteMethodToggle = t3.navtypeToggle = t3.hookToggle = void 0, (n2 = t3.hookToggle || (t3.hookToggle = {})).beforeHooks = "beforeEach", n2.afterHooks = "afterEach", n2.enterHooks = "beforeEnter", (o2 = t3.navtypeToggle || (t3.navtypeToggle = {})).push = "navigateTo", o2.replace = "redirectTo", o2.replaceAll = "reLaunch", o2.pushTab = "switchTab", o2.back = "navigateBack", (r = t3.rewriteMethodToggle || (t3.rewriteMethodToggle = {})).navigateTo = "push", r.navigate = "push", r.redirectTo = "replace", r.reLaunch = "replaceAll", r.switchTab = "pushTab", r.navigateBack = "back";
    }, 309: (e3, t3) => {
      Object.defineProperty(t3, "__esModule", { value: true });
    }, 925: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.beforeProxyHook = void 0;
      var o2 = r(789), n2 = r(883);
      t3.beforeProxyHook = function(e4, t4) {
        var r2 = e4.$options, a = t4.options.beforeProxyHooks;
        if (null == r2)
          return false;
        if (null == a)
          return false;
        for (var i = Object.keys(a), u = function(e5) {
          var u2 = i[e5], l2 = r2[u2];
          if (l2)
            for (var c = a[u2], s = function(e6) {
              if (l2[e6].toString().includes("UNI-SIMPLE-ROUTER"))
                return "continue";
              var r3 = l2.splice(e6, 1, function() {
                for (var e7 = this, n3 = [], a2 = 0; a2 < arguments.length; a2++)
                  n3[a2] = arguments[a2];
                var i2 = "UNI-SIMPLE-ROUTER";
                o2.voidFun(i2), c ? c.call(this, n3, function(t5) {
                  r3.apply(e7, t5);
                }, t4) : r3.apply(this, n3);
              })[0];
            }, p2 = 0; p2 < l2.length; p2++)
              s(p2);
          else
            n2.warn("beforeProxyHooks ===> \u5F53\u524D\u7EC4\u4EF6\u4E0D\u9002\u5408" + u2 + "\uFF0C\u6216\u8005 hook: " + u2 + " \u4E0D\u5B58\u5728\uFF0C\u5DF2\u4E3A\u4F60\u89C4\u907F\u5904\u7406\uFF0C\u53EF\u4EE5\u5FFD\u7565\u3002", t4);
        }, l = 0; l < i.length; l++)
          u(l);
        return true;
      };
    }, 169: function(e3, t3, r) {
      var o2 = this && this.__rest || function(e4, t4) {
        var r2 = {};
        for (var o3 in e4)
          Object.prototype.hasOwnProperty.call(e4, o3) && t4.indexOf(o3) < 0 && (r2[o3] = e4[o3]);
        if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (o3 = Object.getOwnPropertySymbols(e4); n3 < o3.length; n3++)
            t4.indexOf(o3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[n3]) && (r2[o3[n3]] = e4[o3[n3]]);
        }
        return r2;
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.loopCallHook = t3.transitionTo = t3.onTriggerEachHook = t3.callHook = t3.callBeforeRouteLeave = t3.HOOKLIST = t3.ERRORHOOK = void 0;
      var n2 = r(789), a = r(890), i = r(147), u = r(369), l = r(814);
      function c(e4, t4, r2, o3) {
        var a2, i2 = n2.getUniCachePage(0);
        if (Object.keys(i2).length > 0) {
          var u2 = void 0;
          switch ("h5" === e4.options.platform ? u2 = i2.$options.beforeRouteLeave : null != i2.$vm && (u2 = i2.$vm.$options.beforeRouteLeave), n2.getDataType(u2)) {
            case "[object Array]":
              a2 = (a2 = u2[0]).bind(i2);
              break;
            case "[object Function]":
              a2 = u2.bind(i2.$vm);
          }
        }
        return s(a2, t4, r2, e4, o3);
      }
      function s(e4, t4, r2, o3, n3, a2) {
        void 0 === a2 && (a2 = true), null != e4 && e4 instanceof Function ? true === a2 ? e4(t4, r2, n3, o3, false) : (e4(t4, r2, function() {
        }, o3, false), n3()) : n3();
      }
      function p2(e4, t4, r2, o3, a2, i2) {
        var u2 = n2.forMatNextToFrom(e4, t4, r2), l2 = u2.matTo, c2 = u2.matFrom;
        "h5" === e4.options.platform ? f2(a2, 0, i2, e4, l2, c2, o3) : f2(a2.slice(0, 4), 0, function() {
          i2(function() {
            f2(a2.slice(4), 0, n2.voidFun, e4, l2, c2, o3);
          });
        }, e4, l2, c2, o3);
      }
      function f2(e4, r2, i2, u2, c2, s2, p3) {
        var h = n2.routesForMapRoute(u2, c2.path, ["finallyPathMap", "pathMap"]);
        if (e4.length - 1 < r2)
          return i2();
        var v = e4[r2], y = t3.ERRORHOOK[0];
        v(u2, c2, s2, h, function(t4) {
          if ("app-plus" === u2.options.platform && (false !== t4 && "string" != typeof t4 && "object" != typeof t4 || l.tabIndexSelect(c2, s2)), false === t4)
            "h5" === u2.options.platform && i2(false), y({ type: 0, msg: "\u7BA1\u9053\u51FD\u6570\u4F20\u9012 false \u5BFC\u822A\u88AB\u7EC8\u6B62!", matTo: c2, matFrom: s2, nextTo: t4 }, u2);
          else if ("string" == typeof t4 || "object" == typeof t4) {
            var n3 = p3, h2 = t4;
            if ("object" == typeof t4) {
              var v2 = t4.NAVTYPE;
              h2 = o2(t4, ["NAVTYPE"]), null != v2 && (n3 = v2);
            }
            a.navjump(h2, u2, n3, { from: s2, next: i2 });
          } else
            null == t4 ? (r2++, f2(e4, r2, i2, u2, c2, s2, p3)) : y({ type: 1, msg: "\u7BA1\u9053\u51FD\u6570\u4F20\u9012\u672A\u77E5\u7C7B\u578B\uFF0C\u65E0\u6CD5\u88AB\u8BC6\u522B\u3002\u5BFC\u822A\u88AB\u7EC8\u6B62\uFF01", matTo: c2, matFrom: s2, nextTo: t4 }, u2);
        });
      }
      t3.ERRORHOOK = [function(e4, t4) {
        return t4.lifeCycle.routerErrorHooks[0](e4, t4);
      }], t3.HOOKLIST = [function(e4, t4, r2, o3, n3) {
        return s(e4.lifeCycle.routerBeforeHooks[0], t4, r2, e4, n3);
      }, function(e4, t4, r2, o3, n3) {
        return c(e4, t4, r2, n3);
      }, function(e4, t4, r2, o3, n3) {
        return s(e4.lifeCycle.beforeHooks[0], t4, r2, e4, n3);
      }, function(e4, t4, r2, o3, n3) {
        return s(o3.beforeEnter, t4, r2, e4, n3);
      }, function(e4, t4, r2, o3, n3) {
        return s(e4.lifeCycle.afterHooks[0], t4, r2, e4, n3, false);
      }, function(e4, t4, r2, o3, n3) {
        return e4.$lockStatus = false, "h5" === e4.options.platform && (i.proxyH5Mount(e4), u.addKeepAliveInclude(e4)), e4.runId++, s(e4.lifeCycle.routerAfterHooks[0], t4, r2, e4, n3, false);
      }], t3.callBeforeRouteLeave = c, t3.callHook = s, t3.onTriggerEachHook = function(e4, r2, o3, n3, a2) {
        var i2 = [];
        switch (n3) {
          case "beforeEach":
            i2 = t3.HOOKLIST.slice(0, 3);
            break;
          case "afterEach":
            i2 = t3.HOOKLIST.slice(4);
            break;
          case "beforeEnter":
            i2 = t3.HOOKLIST.slice(3, 4);
        }
        p2(o3, e4, r2, "push", i2, a2);
      }, t3.transitionTo = p2, t3.loopCallHook = f2;
    }, 890: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      }, n2 = this && this.__rest || function(e4, t4) {
        var r2 = {};
        for (var o3 in e4)
          Object.prototype.hasOwnProperty.call(e4, o3) && t4.indexOf(o3) < 0 && (r2[o3] = e4[o3]);
        if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (o3 = Object.getOwnPropertySymbols(e4); n3 < o3.length; n3++)
            t4.indexOf(o3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[n3]) && (r2[o3[n3]] = e4[o3[n3]]);
        }
        return r2;
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.createRoute = t3.forceGuardEach = t3.backOptionsBuild = t3.navjump = t3.lockNavjump = void 0;
      var a = r(366), i = r(99), u = r(789), l = r(169), c = r(845), s = r(169);
      function p2(e4, t4, r2, o3, n3) {
        u.lockDetectWarn(t4, e4, r2, function() {
          "h5" !== t4.options.platform && (t4.$lockStatus = true), f2(e4, t4, r2, void 0, o3, n3);
        }, n3);
      }
      function f2(e4, t4, r2, n3, p3, f3, v2) {
        if (void 0 === v2 && (v2 = true), "back" === r2) {
          var y = 1;
          if ("string" == typeof e4 ? y = +e4 : (y = e4.delta || 1, f3 = o2(o2({}, f3 || {}), e4)), "h5" === t4.options.platform) {
            t4.$route.go(-y);
            var g = (f3 || { success: u.voidFun }).success || u.voidFun, d = (f3 || { complete: u.voidFun }).complete || u.voidFun;
            return g({ errMsg: "navigateBack:ok" }), void d({ errMsg: "navigateBack:ok" });
          }
          e4 = h(t4, y, f3);
        }
        var m = i.queryPageToMap(e4, t4).rule;
        m.type = a.navtypeToggle[r2];
        var b = u.paramsToQuery(t4, m), P = i.resolveQuery(b, t4);
        if ("h5" === t4.options.platform)
          if ("push" !== r2 && (r2 = "replace"), null != n3)
            n3.next(o2({ replace: "push" !== r2 }, P));
          else if ("push" === r2 && Reflect.has(P, "events")) {
            if (Reflect.has(P, "name"))
              throw new Error("\u5728h5\u7AEF\u4E0A\u4F7F\u7528 'push'\u3001'navigateTo' \u8DF3\u8F6C\u65F6\uFF0C\u5982\u679C\u5305\u542B events \u4E0D\u5141\u8BB8\u4F7F\u7528 name \u8DF3\u8F6C\uFF0C\u56E0\u4E3A name \u5B9E\u73B0\u4E86\u52A8\u6001\u8DEF\u7531\u3002\u8BF7\u66F4\u6362\u4E3A path \u6216\u8005 url \u8DF3\u8F6C\uFF01");
            index.navigateTo(P, true, u.voidFun, p3);
          } else
            t4.$route[r2](P, P.success || u.voidFun, P.fail || u.voidFun);
        else {
          var O = { path: "" };
          if (null == n3) {
            var k = u.routesForMapRoute(t4, P.path, ["finallyPathMap", "pathMap"]);
            k = u.notRouteTo404(t4, k, P, r2), P = o2(o2(o2(o2({}, k), { params: {} }), P), { path: k.path }), O = c.createToFrom(P, t4);
          } else
            O = n3.from;
          if (c.createFullPath(P, O), false === v2)
            return P;
          l.transitionTo(t4, P, O, r2, s.HOOKLIST, function(e5) {
            index[a.navtypeToggle[r2]](P, true, e5, p3);
          });
        }
      }
      function h(e4, t4, r2) {
        void 0 === r2 && (r2 = {});
        var n3 = v(e4, t4, void 0, o2({ NAVTYPE: "back" }, r2)), a2 = o2(o2({}, r2), { path: n3.path, query: n3.query, delta: t4 });
        if ("[object Object]" === u.getDataType(r2)) {
          var i2 = r2, l2 = i2.animationDuration, c2 = i2.animationType;
          null != l2 && (a2.animationDuration = l2), null != c2 && (a2.animationType = c2);
          var s2 = r2.from;
          null != s2 && (a2.BACKTYPE = s2);
        }
        return a2;
      }
      function v(e4, t4, r2, l2) {
        void 0 === t4 && (t4 = 0), void 0 === l2 && (l2 = {});
        var c2 = { name: "", meta: {}, path: "", fullPath: "", NAVTYPE: "", query: {}, params: {}, BACKTYPE: (r2 || { BACKTYPE: "" }).BACKTYPE || "" };
        if (19970806 === t4)
          return c2;
        if ("h5" === e4.options.platform) {
          var s2 = { path: "" };
          s2 = null != r2 ? r2 : e4.$route.currentRoute;
          var p3 = u.copyData(s2.params);
          delete p3.__id__;
          var f3 = i.parseQuery(o2(o2({}, p3), u.copyData(s2.query)), e4);
          s2 = o2(o2({}, s2), { query: f3 }), c2.path = s2.path, c2.fullPath = s2.fullPath || "", c2.query = u.deepDecodeQuery(s2.query || {}), c2.NAVTYPE = a.rewriteMethodToggle[s2.type || "reLaunch"];
        } else {
          var h2 = {};
          if (null != r2)
            h2 = o2(o2({}, r2), { openType: r2.type });
          else {
            var v2 = u.getUniCachePage(t4);
            if (0 === Object.keys(v2).length) {
              var y = l2.NAVTYPE, g = n2(l2, ["NAVTYPE"]), d = "\u4E0D\u5B58\u5728\u7684\u9875\u9762\u6808\uFF0C\u8BF7\u786E\u4FDD\u6709\u8DB3\u591F\u7684\u9875\u9762\u53EF\u7528\uFF0C\u5F53\u524D level:" + t4;
              throw e4.options.routerErrorEach({ type: 3, msg: d, NAVTYPE: y, level: t4, uniActualData: g }, e4), new Error(d);
            }
            var m = v2.options || {};
            h2 = o2(o2({}, v2.$page || {}), { query: u.deepDecodeQuery(m), fullPath: decodeURIComponent((v2.$page || {}).fullPath || "/" + v2.route) }), "app-plus" !== e4.options.platform && (h2.path = "/" + v2.route);
          }
          var b = h2.openType;
          c2.query = h2.query, c2.path = h2.path, c2.fullPath = h2.fullPath, c2.NAVTYPE = a.rewriteMethodToggle[b || "reLaunch"];
        }
        var P = u.routesForMapRoute(e4, c2.path, ["finallyPathMap", "pathMap"]), O = o2(o2({}, c2), P);
        return O.query = i.parseQuery(O.query, e4), O;
      }
      t3.lockNavjump = p2, t3.navjump = f2, t3.backOptionsBuild = h, t3.forceGuardEach = function(e4, t4, r2) {
        if (void 0 === t4 && (t4 = "replaceAll"), void 0 === r2 && (r2 = false), "h5" === e4.options.platform)
          throw new Error("\u5728h5\u7AEF\u4E0A\u4F7F\u7528\uFF1AforceGuardEach \u662F\u65E0\u610F\u4E49\u7684\uFF0C\u76EE\u524D forceGuardEach \u4EC5\u652F\u6301\u5728\u975Eh5\u7AEF\u4E0A\u4F7F\u7528");
        var o3 = u.getUniCachePage(0);
        0 === Object.keys(o3).length && e4.options.routerErrorEach({ type: 3, NAVTYPE: t4, uniActualData: {}, level: 0, msg: "\u4E0D\u5B58\u5728\u7684\u9875\u9762\u6808\uFF0C\u8BF7\u786E\u4FDD\u6709\u8DB3\u591F\u7684\u9875\u9762\u53EF\u7528\uFF0C\u5F53\u524D level:0" }, e4);
        var n3 = o3, a2 = n3.route, i2 = n3.options;
        p2({ path: "/" + a2, query: u.deepDecodeQuery(i2 || {}) }, e4, t4, r2);
      }, t3.createRoute = v;
    }, 845: (e3, t3, r) => {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.resetPageHook = t3.resetAndCallPageHook = t3.proxyPageHook = t3.createFullPath = t3.createToFrom = void 0;
      var o2 = r(282), n2 = r(789), a = r(890), i = r(99);
      function u(e4) {
        for (var t4 = e4.proxyHookDeps, r2 = 0, o3 = Object.entries(t4.hooks); r2 < o3.length; r2++)
          (0, o3[r2][1].resetHook)();
      }
      t3.createToFrom = function(e4, t4) {
        var r2 = n2.getUniCachePage(0);
        return "[object Array]" === n2.getDataType(r2) ? n2.deepClone(e4) : a.createRoute(t4);
      }, t3.createFullPath = function(e4, t4) {
        if (null == e4.fullPath) {
          var r2 = i.stringifyQuery(e4.query);
          e4.fullPath = e4.path + r2;
        }
        null == t4.fullPath && (r2 = i.stringifyQuery(t4.query), t4.fullPath = t4.path + r2);
      }, t3.proxyPageHook = function(e4, t4, r2) {
        for (var n3 = t4.proxyHookDeps, a2 = e4.$options, i2 = function(i3) {
          var u3 = o2.proxyHookName[i3], l = a2[u3];
          if (l)
            for (var c = function(o3) {
              if (l[o3].toString().includes("UNI-SIMPLE-ROUTER"))
                return "continue";
              var a3 = Object.keys(n3.hooks).length + 1, i4 = function() {
                for (var e5 = [], t5 = 0; t5 < arguments.length; t5++)
                  e5[t5] = arguments[t5];
                n3.resetIndex.push(a3), n3.options[a3] = e5;
              }, u4 = l.splice(o3, 1, i4)[0];
              n3.hooks[a3] = { proxyHook: i4, callHook: function(o4) {
                if (t4.enterPath.replace(/^\//, "") === o4.replace(/^\//, "") || "app" === r2) {
                  var i5 = n3.options[a3];
                  u4.apply(e4, i5);
                }
              }, resetHook: function() {
                l.splice(o3, 1, u4);
              } };
            }, s = 0; s < l.length; s++)
              c(s);
        }, u2 = 0; u2 < o2.proxyHookName.length; u2++)
          i2(u2);
      }, t3.resetAndCallPageHook = function(e4, t4, r2) {
        void 0 === r2 && (r2 = true);
        var o3 = t4.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);
        if (null == o3)
          throw new Error("\u8FD8\u539Fhook\u5931\u8D25\u3002\u8BF7\u68C0\u67E5 \u3010" + t4 + "\u3011 \u8DEF\u5F84\u662F\u5426\u6B63\u786E\u3002");
        t4 = o3[1];
        for (var n3 = e4.proxyHookDeps, a2 = n3.resetIndex, i2 = 0; i2 < a2.length; i2++) {
          var l = a2[i2];
          (0, n3.hooks[l].callHook)(t4);
        }
        r2 && u(e4);
      }, t3.resetPageHook = u;
    }, 99: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.stringifyQuery = t3.parseQuery = t3.resolveQuery = t3.queryPageToMap = void 0;
      var n2 = r(789), a = r(169), i = r(883), u = /[!'()*]/g, l = function(e4) {
        return "%" + e4.charCodeAt(0).toString(16);
      }, c = /%2C/g, s = function(e4) {
        return encodeURIComponent(e4).replace(u, l).replace(c, ",");
      };
      t3.queryPageToMap = function(e4, t4) {
        var r2 = {}, i2 = "", u2 = e4.success, l2 = e4.fail;
        if ("[object Object]" === n2.getDataType(e4)) {
          var c2 = e4;
          if (null != c2.path) {
            var s2 = n2.urlToJson(c2.path), p2 = s2.path, f2 = s2.query;
            i2 = n2.routesForMapRoute(t4, p2, ["finallyPathList", "pathMap"]), r2 = o2(o2({}, f2), e4.query || {}), c2.path = p2, c2.query = r2, delete e4.params;
          } else
            null != c2.name ? null == (i2 = t4.routesMap.nameMap[c2.name]) ? i2 = n2.getWildcardRule(t4, { type: 2, msg: "\u547D\u540D\u8DEF\u7531\u4E3A\uFF1A" + c2.name + " \u7684\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01", toRule: e4 }) : (r2 = e4.params || {}, delete e4.query) : i2 = n2.getWildcardRule(t4, { type: 2, msg: e4 + " \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u6D4B\u5F53\u524D\u8DEF\u7531\u8868\u4E0B\u662F\u5426\u6709\u5305\u542B\u3002", toRule: e4 });
        } else
          e4 = n2.urlToJson(e4), i2 = n2.routesForMapRoute(t4, e4.path, ["finallyPathList", "pathMap"]), r2 = e4.query;
        if ("h5" === t4.options.platform) {
          n2.getRoutePath(i2, t4).finallyPath.includes(":") && null == e4.name && a.ERRORHOOK[0]({ type: 2, msg: "\u5F53\u6709\u8BBE\u7F6E alias\u6216\u8005aliasPath \u4E3A\u52A8\u6001\u8DEF\u7531\u65F6\uFF0C\u4E0D\u5141\u8BB8\u4F7F\u7528 path \u8DF3\u8F6C\u3002\u8BF7\u4F7F\u7528 name \u8DF3\u8F6C\uFF01", route: i2 }, t4);
          var h = e4.complete, v = e4.success, y = e4.fail;
          if ("[object Function]" === n2.getDataType(h)) {
            var g = function(e5, t5) {
              "[object Function]" === n2.getDataType(t5) && t5.apply(this, e5), h.apply(this, e5);
            };
            u2 = function() {
              for (var e5 = [], t5 = 0; t5 < arguments.length; t5++)
                e5[t5] = arguments[t5];
              g.call(this, e5, v);
            }, l2 = function() {
              for (var e5 = [], t5 = 0; t5 < arguments.length; t5++)
                e5[t5] = arguments[t5];
              g.call(this, e5, y);
            };
          }
        }
        var d = e4;
        return "[object Function]" === n2.getDataType(d.success) && (d.success = u2), "[object Function]" === n2.getDataType(d.fail) && (d.fail = l2), { rule: d, route: i2, query: r2 };
      }, t3.resolveQuery = function(e4, t4) {
        var r2 = "query";
        null != e4.params && (r2 = "params"), null != e4.query && (r2 = "query");
        var o3 = n2.copyData(e4[r2] || {}), a2 = t4.options.resolveQuery;
        if (a2) {
          var u2 = a2(o3);
          "[object Object]" !== n2.getDataType(u2) ? i.warn("\u8BF7\u6309\u683C\u5F0F\u8FD4\u56DE\u53C2\u6570\uFF1A resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t4) : e4[r2] = u2;
        } else {
          if (!n2.assertDeepObject(o3))
            return e4;
          var l2 = JSON.stringify(o3);
          e4[r2] = { query: l2 };
        }
        return e4;
      }, t3.parseQuery = function(e4, t4) {
        var r2 = t4.options.parseQuery;
        if (r2)
          e4 = r2(n2.copyData(e4)), "[object Object]" !== n2.getDataType(e4) && i.warn("\u8BF7\u6309\u683C\u5F0F\u8FD4\u56DE\u53C2\u6570\uFF1A parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t4);
        else if (Reflect.get(e4, "query")) {
          var o3 = Reflect.get(e4, "query");
          if ("string" == typeof o3)
            try {
              o3 = JSON.parse(o3);
            } catch (e5) {
              i.warn("\u5C1D\u8BD5\u89E3\u6790\u6DF1\u5EA6\u5BF9\u8C61\u5931\u8D25\uFF0C\u6309\u539F\u6837\u8F93\u51FA\u3002" + e5, t4);
            }
          if ("object" == typeof o3)
            return n2.deepDecodeQuery(o3);
        }
        return e4;
      }, t3.stringifyQuery = function(e4) {
        var t4 = e4 ? Object.keys(e4).map(function(t5) {
          var r2 = e4[t5];
          if (void 0 === r2)
            return "";
          if (null === r2)
            return s(t5);
          if (Array.isArray(r2)) {
            var o3 = [];
            return r2.forEach(function(e5) {
              void 0 !== e5 && (null === e5 ? o3.push(s(t5)) : o3.push(s(t5) + "=" + s(e5)));
            }), o3.join("&");
          }
          return s(t5) + "=" + s(r2);
        }).filter(function(e5) {
          return e5.length > 0;
        }).join("&") : null;
        return t4 ? "?" + t4 : "";
      };
    }, 314: function(e3, t3, r) {
      var o2 = this && this.__awaiter || function(e4, t4, r2, o3) {
        return new (r2 || (r2 = Promise))(function(n3, a2) {
          function i2(e5) {
            try {
              l2(o3.next(e5));
            } catch (e6) {
              a2(e6);
            }
          }
          function u2(e5) {
            try {
              l2(o3.throw(e5));
            } catch (e6) {
              a2(e6);
            }
          }
          function l2(e5) {
            var t5;
            e5.done ? n3(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
              e6(t5);
            })).then(i2, u2);
          }
          l2((o3 = o3.apply(e4, t4 || [])).next());
        });
      }, n2 = this && this.__generator || function(e4, t4) {
        var r2, o3, n3, a2, i2 = { label: 0, sent: function() {
          if (1 & n3[0])
            throw n3[1];
          return n3[1];
        }, trys: [], ops: [] };
        return a2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
          return this;
        }), a2;
        function u2(a3) {
          return function(u3) {
            return function(a4) {
              if (r2)
                throw new TypeError("Generator is already executing.");
              for (; i2; )
                try {
                  if (r2 = 1, o3 && (n3 = 2 & a4[0] ? o3.return : a4[0] ? o3.throw || ((n3 = o3.return) && n3.call(o3), 0) : o3.next) && !(n3 = n3.call(o3, a4[1])).done)
                    return n3;
                  switch (o3 = 0, n3 && (a4 = [2 & a4[0], n3.value]), a4[0]) {
                    case 0:
                    case 1:
                      n3 = a4;
                      break;
                    case 4:
                      return i2.label++, { value: a4[1], done: false };
                    case 5:
                      i2.label++, o3 = a4[1], a4 = [0];
                      continue;
                    case 7:
                      a4 = i2.ops.pop(), i2.trys.pop();
                      continue;
                    default:
                      if (!((n3 = (n3 = i2.trys).length > 0 && n3[n3.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                        i2 = 0;
                        continue;
                      }
                      if (3 === a4[0] && (!n3 || a4[1] > n3[0] && a4[1] < n3[3])) {
                        i2.label = a4[1];
                        break;
                      }
                      if (6 === a4[0] && i2.label < n3[1]) {
                        i2.label = n3[1], n3 = a4;
                        break;
                      }
                      if (n3 && i2.label < n3[2]) {
                        i2.label = n3[2], i2.ops.push(a4);
                        break;
                      }
                      n3[2] && i2.ops.pop(), i2.trys.pop();
                      continue;
                  }
                  a4 = t4.call(e4, i2);
                } catch (e5) {
                  a4 = [6, e5], o3 = 0;
                } finally {
                  r2 = n3 = 0;
                }
              if (5 & a4[0])
                throw a4[1];
              return { value: a4[0] ? a4[1] : void 0, done: true };
            }([a3, u3]);
          };
        }
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.rewriteMethod = void 0;
      var a = r(366), i = r(789), u = r(883), l = r(809), c = r(814), s = ["navigateTo", "redirectTo", "reLaunch", "switchTab", "navigateBack"], p2 = { navigateTo: function() {
      }, redirectTo: function() {
      }, reLaunch: function() {
      }, switchTab: function() {
      }, navigateBack: function() {
      } };
      t3.rewriteMethod = function(e4) {
        false === e4.options.keepUniOriginNav && s.forEach(function(t4) {
          var r2 = index[t4];
          p2[t4] = r2, index[t4] = function(s2, f2, h, v) {
            return void 0 === f2 && (f2 = false), o2(this, void 0, void 0, function() {
              return n2(this, function(o3) {
                switch (o3.label) {
                  case 0:
                    return f2 ? "app-plus" !== e4.options.platform ? [3, 2] : [4, c.HomeNvueSwitchTab(e4, s2, p2.reLaunch)] : [3, 3];
                  case 1:
                    o3.sent(), o3.label = 2;
                  case 2:
                    return l.uniOriginJump(e4, r2, t4, s2, h, v), [3, 4];
                  case 3:
                    "app-plus" === e4.options.platform && 0 === Object.keys(e4.appMain).length && (e4.appMain = { NAVTYPE: t4, path: s2.url }), function(e5, t5, r3) {
                      if ("app-plus" === r3.options.platform) {
                        var o4 = null;
                        e5 && (o4 = e5.openType), null != o4 && "appLaunch" === o4 && (t5 = "reLaunch");
                      }
                      if ("reLaunch" === t5 && '{"url":"/"}' === JSON.stringify(e5) && (u.warn("uni-app \u539F\u751F\u65B9\u6CD5\uFF1AreLaunch({url:'/'}) \u9ED8\u8BA4\u88AB\u91CD\u5199\u5566\uFF01\u4F60\u53EF\u4EE5\u4F7F\u7528 this.$Router.replaceAll() \u6216\u8005 uni.reLaunch({url:'/?xxx=xxx'})", r3), t5 = "navigateBack", e5 = { from: "backbutton" }), "navigateBack" === t5) {
                        var n3 = 1;
                        null == e5 && (e5 = { delta: 1 }), "[object Number]" === i.getDataType(e5.delta) && (n3 = e5.delta), r3.back(n3, e5);
                      } else {
                        var l2 = a.rewriteMethodToggle[t5], c2 = e5.url;
                        if (!c2.startsWith("/")) {
                          var s3 = i.resolveAbsolutePath(c2, r3);
                          c2 = s3, e5.url = s3;
                        }
                        if ("switchTab" === t5) {
                          var p3 = i.routesForMapRoute(r3, c2, ["pathMap", "finallyPathList"]), f3 = i.getRoutePath(p3, r3).finallyPath;
                          if ("[object Array]" === i.getDataType(f3) && u.warn("uni-app \u539F\u751F\u65B9\u6CD5\u8DF3\u8F6C\u8DEF\u5F84\u4E3A\uFF1A" + c2 + "\u3002\u6B64\u8DEF\u4E3A\u662Ftab\u9875\u9762\u65F6\uFF0C\u4E0D\u5141\u8BB8\u8BBE\u7F6E alias \u4E3A\u6570\u7EC4\u7684\u60C5\u51B5\uFF0C\u5E76\u4E14\u4E0D\u80FD\u4E3A\u52A8\u6001\u8DEF\u7531\uFF01\u5F53\u7136\u4F60\u53EF\u4EE5\u901A\u8FC7\u901A\u914D\u7B26*\u89E3\u51B3\uFF01", r3), "*" === f3 && u.warn("uni-app \u539F\u751F\u65B9\u6CD5\u8DF3\u8F6C\u8DEF\u5F84\u4E3A\uFF1A" + c2 + "\u3002\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u4E0D\u5230\u76F8\u5173\u8DEF\u7531\u8868\uFF01\u5F53\u7136\u4F60\u53EF\u4EE5\u901A\u8FC7\u901A\u914D\u7B26*\u89E3\u51B3\uFF01", r3), "h5" === r3.options.platform) {
                            var h2 = e5.success;
                            e5.success = function() {
                              for (var t6 = [], r4 = 0; r4 < arguments.length; r4++)
                                t6[r4] = arguments[r4];
                              null == h2 || h2.apply(null, t6), i.timeOut(150).then(function() {
                                var t7 = e5.detail || {};
                                if (Object.keys(t7).length > 0 && Reflect.has(t7, "index")) {
                                  var r5 = i.getUniCachePage(0);
                                  if (0 === Object.keys(r5).length)
                                    return false;
                                  var o5 = r5, n4 = o5.$options.onTabItemTap;
                                  if (n4)
                                    for (var a2 = 0; a2 < n4.length; a2++)
                                      n4[a2].call(o5, t7);
                                }
                              });
                            };
                          }
                          c2 = f3;
                        }
                        var v2 = e5, y = v2.events, g = v2.success, d = v2.fail, m = v2.complete, b = v2.animationType, P = { path: c2, events: y, success: g, fail: d, complete: m, animationDuration: v2.animationDuration, animationType: b };
                        r3[l2](i.notDeepClearNull(P));
                      }
                    }(s2, t4, e4), o3.label = 4;
                  case 4:
                    return [2];
                }
              });
            });
          };
        });
      };
    }, 963: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.createRouter = t3.RouterMount = void 0;
      var n2 = r(282), a = r(789), i = r(662), u = r(460), l = r(890), c = r(314), s = function() {
      }, p2 = new Promise(function(e4) {
        return s = e4;
      });
      t3.createRouter = function(e4) {
        var t4 = a.assertNewOptions(e4), r2 = { options: t4, mount: [], runId: 0, Vue: null, proxyHookDeps: n2.proxyHookDeps, appMain: {}, enterPath: "", $route: null, $lockStatus: false, routesMap: {}, lifeCycle: i.registerRouterHooks(n2.lifeCycle, t4), push: function(e5) {
          l.lockNavjump(e5, r2, "push");
        }, replace: function(e5) {
          l.lockNavjump(e5, r2, "replace");
        }, replaceAll: function(e5) {
          l.lockNavjump(e5, r2, "replaceAll");
        }, pushTab: function(e5) {
          l.lockNavjump(e5, r2, "pushTab");
        }, back: function(e5, t5) {
          void 0 === e5 && (e5 = 1), "[object Object]" !== a.getDataType(t5) ? t5 = { from: "navigateBack" } : Reflect.has(t5, "from") || (t5 = o2(o2({}, t5), { from: "navigateBack" })), l.lockNavjump(e5 + "", r2, "back", void 0, t5);
        }, forceGuardEach: function(e5, t5) {
          l.forceGuardEach(r2, e5, t5);
        }, beforeEach: function(e5) {
          i.registerEachHooks(r2, "beforeHooks", e5);
        }, afterEach: function(e5) {
          i.registerEachHooks(r2, "afterHooks", e5);
        }, install: function(e5) {
          r2.Vue = e5, c.rewriteMethod(this), u.initMixins(e5, this), Object.defineProperty(e5.prototype, "$Router", { get: function() {
            var e6 = r2;
            return Object.defineProperty(this, "$Router", { value: e6, writable: false, configurable: false, enumerable: false }), Object.seal(e6);
          } }), Object.defineProperty(e5.prototype, "$Route", { get: function() {
            return l.createRoute(r2);
          } }), Object.defineProperty(e5.prototype, "$AppReady", { get: function() {
            return "h5" === r2.options.platform ? Promise.resolve() : p2;
          }, set: function(e6) {
            true === e6 && s();
          } });
        } };
        return a.def(r2, "currentRoute", function() {
          return l.createRoute(r2);
        }), r2.beforeEach(function(e5, t5, r3) {
          return r3();
        }), r2.afterEach(function() {
        }), r2;
      }, t3.RouterMount = function(e4, t4, r2) {
        if (void 0 === r2 && (r2 = "#app"), "[object Array]" !== a.getDataType(t4.mount))
          throw new Error("\u6302\u8F7D\u8DEF\u7531\u5931\u8D25\uFF0Crouter.app \u5E94\u8BE5\u4E3A\u6570\u7EC4\u7C7B\u578B\u3002\u5F53\u524D\u7C7B\u578B\uFF1A" + typeof t4.mount);
        if (t4.mount.push({ app: e4, el: r2 }), "h5" === t4.options.platform) {
          var o3 = t4.$route;
          o3.replace({ path: o3.currentRoute.fullPath });
        }
      };
    }, 809: function(e3, t3, r) {
      var o2 = this && this.__assign || function() {
        return (o2 = Object.assign || function(e4) {
          for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
            for (var n3 in t4 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          return e4;
        }).apply(this, arguments);
      }, n2 = this && this.__awaiter || function(e4, t4, r2, o3) {
        return new (r2 || (r2 = Promise))(function(n3, a2) {
          function i2(e5) {
            try {
              l2(o3.next(e5));
            } catch (e6) {
              a2(e6);
            }
          }
          function u2(e5) {
            try {
              l2(o3.throw(e5));
            } catch (e6) {
              a2(e6);
            }
          }
          function l2(e5) {
            var t5;
            e5.done ? n3(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
              e6(t5);
            })).then(i2, u2);
          }
          l2((o3 = o3.apply(e4, t4 || [])).next());
        });
      }, a = this && this.__generator || function(e4, t4) {
        var r2, o3, n3, a2, i2 = { label: 0, sent: function() {
          if (1 & n3[0])
            throw n3[1];
          return n3[1];
        }, trys: [], ops: [] };
        return a2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
          return this;
        }), a2;
        function u2(a3) {
          return function(u3) {
            return function(a4) {
              if (r2)
                throw new TypeError("Generator is already executing.");
              for (; i2; )
                try {
                  if (r2 = 1, o3 && (n3 = 2 & a4[0] ? o3.return : a4[0] ? o3.throw || ((n3 = o3.return) && n3.call(o3), 0) : o3.next) && !(n3 = n3.call(o3, a4[1])).done)
                    return n3;
                  switch (o3 = 0, n3 && (a4 = [2 & a4[0], n3.value]), a4[0]) {
                    case 0:
                    case 1:
                      n3 = a4;
                      break;
                    case 4:
                      return i2.label++, { value: a4[1], done: false };
                    case 5:
                      i2.label++, o3 = a4[1], a4 = [0];
                      continue;
                    case 7:
                      a4 = i2.ops.pop(), i2.trys.pop();
                      continue;
                    default:
                      if (!((n3 = (n3 = i2.trys).length > 0 && n3[n3.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                        i2 = 0;
                        continue;
                      }
                      if (3 === a4[0] && (!n3 || a4[1] > n3[0] && a4[1] < n3[3])) {
                        i2.label = a4[1];
                        break;
                      }
                      if (6 === a4[0] && i2.label < n3[1]) {
                        i2.label = n3[1], n3 = a4;
                        break;
                      }
                      if (n3 && i2.label < n3[2]) {
                        i2.label = n3[2], i2.ops.push(a4);
                        break;
                      }
                      n3[2] && i2.ops.pop(), i2.trys.pop();
                      continue;
                  }
                  a4 = t4.call(e4, i2);
                } catch (e5) {
                  a4 = [6, e5], o3 = 0;
                } finally {
                  r2 = n3 = 0;
                }
              if (5 & a4[0])
                throw a4[1];
              return { value: a4[0] ? a4[1] : void 0, done: true };
            }([a3, u3]);
          };
        }
      }, i = this && this.__rest || function(e4, t4) {
        var r2 = {};
        for (var o3 in e4)
          Object.prototype.hasOwnProperty.call(e4, o3) && t4.indexOf(o3) < 0 && (r2[o3] = e4[o3]);
        if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (o3 = Object.getOwnPropertySymbols(e4); n3 < o3.length; n3++)
            t4.indexOf(o3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, o3[n3]) && (r2[o3[n3]] = e4[o3[n3]]);
        }
        return r2;
      };
      Object.defineProperty(t3, "__esModule", { value: true }), t3.formatOriginURLQuery = t3.uniOriginJump = void 0;
      var u = r(99), l = r(789), c = r(282), s = r(845), p2 = 0, f2 = "reLaunch";
      function h(e4, t4, r2) {
        var n3, a2 = t4.url, i2 = t4.path, c2 = t4.query, s2 = t4.animationType, p3 = t4.animationDuration, f3 = t4.events, h2 = t4.success, v = t4.fail, y = t4.complete, g = t4.delta, d = t4.animation, m = u.stringifyQuery(c2 || {}), b = "" === m ? i2 || a2 : (i2 || a2) + m, P = {};
        return "app-plus" === e4.options.platform && "navigateBack" !== r2 && (P = (null === (n3 = e4.options.APP) || void 0 === n3 ? void 0 : n3.animation) || {}, P = o2(o2({}, P), d || {})), l.notDeepClearNull({ delta: g, url: b, animationType: s2 || P.animationType, animationDuration: p3 || P.animationDuration, events: f3, success: h2, fail: v, complete: y });
      }
      t3.uniOriginJump = function(e4, t4, r2, u2, v, y) {
        var g = h(e4, u2, r2), d = g.complete, m = i(g, ["complete"]), b = e4.options.platform;
        null != y && false === y ? (0 === p2 && (p2++, "h5" !== b && (s.resetAndCallPageHook(e4, m.url), e4.Vue.prototype.$AppReady = true)), d && d.apply(null, { msg: "forceGuardEach\u5F3A\u5236\u89E6\u53D1\u5E76\u4E14\u4E0D\u6267\u884C\u8DF3\u8F6C" }), v && v.apply(null, { msg: "forceGuardEach\u5F3A\u5236\u89E6\u53D1\u5E76\u4E14\u4E0D\u6267\u884C\u8DF3\u8F6C" })) : (0 === p2 && ("app-plus" === b ? s.resetAndCallPageHook(e4, m.url) : new RegExp(c.mpPlatformReg, "g").test(b) && s.resetAndCallPageHook(e4, m.url, false)), t4(o2(o2({}, m), { from: u2.BACKTYPE, complete: function() {
          for (var t5, o3, i2, u3, h2 = [], y2 = 0; y2 < arguments.length; y2++)
            h2[y2] = arguments[y2];
          return n2(this, void 0, void 0, function() {
            var n3, y3, g2;
            return a(this, function(a2) {
              switch (a2.label) {
                case 0:
                  return 0 === p2 && (p2++, "h5" !== b && (new RegExp(c.mpPlatformReg, "g").test(b) && s.resetPageHook(e4), e4.Vue.prototype.$AppReady = true, "app-plus" === b && ((n3 = plus.nativeObj.View.getViewById("router-loadding")) && n3.close(), (y3 = null === (t5 = e4.options.APP) || void 0 === t5 ? void 0 : t5.launchedHook) && y3()))), g2 = 0, new RegExp(c.mpPlatformReg, "g").test(b) ? g2 = null === (o3 = e4.options.applet) || void 0 === o3 ? void 0 : o3.animationDuration : "app-plus" === b && "navigateBack" === r2 && "navigateTo" === f2 && (g2 = null === (u3 = null === (i2 = e4.options.APP) || void 0 === i2 ? void 0 : i2.animation) || void 0 === u3 ? void 0 : u3.animationDuration), "navigateTo" !== r2 && "navigateBack" !== r2 || 0 === g2 ? [3, 2] : [4, l.timeOut(g2)];
                case 1:
                  a2.sent(), a2.label = 2;
                case 2:
                  return f2 = r2, d && d.apply(null, h2), v && v.apply(null, h2), [2];
              }
            });
          });
        } })));
      }, t3.formatOriginURLQuery = h;
    } }, t2 = {}, function r(o2) {
      if (t2[o2])
        return t2[o2].exports;
      var n2 = t2[o2] = { exports: {} };
      return e2[o2].call(n2.exports, n2, n2.exports, r), n2.exports;
    }(607);
    var e2, t2;
  });
})(uniSimpleRouter);
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
exports._export_sfc = _export_sfc;
exports.createSSRApp = createSSRApp;
exports.createStore = createStore;
exports.e = e;
exports.f = f;
exports.index = index;
exports.initVueI18n = initVueI18n;
exports.n = n;
exports.o = o;
exports.onBeforeMount = onBeforeMount;
exports.onLoad = onLoad;
exports.p = p;
exports.reactive = reactive;
exports.ref = ref;
exports.resolveComponent = resolveComponent;
exports.t = t;
exports.uniSimpleRouter = uniSimpleRouter;
exports.unref = unref;
exports.watch = watch;
