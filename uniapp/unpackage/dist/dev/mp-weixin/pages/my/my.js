"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "my",
      codeStatus: ""
    };
  },
  onLoad() {
  },
  methods: {
    tohome() {
      common_vendor.index.navigateTo({
        url: "/pages/home/home?id=1&name=zhangsan"
      });
    },
    tocs() {
      common_vendor.index.navigateTo({
        url: "/pages/cs/index?id=1&name=zhangsan"
      });
    },
    getlocation() {
      common_vendor.index.chooseLocation({
        success: function(res) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:79", "位置名称：" + res.name);
          common_vendor.index.__f__("log", "at pages/my/my.vue:80", "详细地址：" + res.address);
          common_vendor.index.__f__("log", "at pages/my/my.vue:81", "纬度：" + res.latitude);
          common_vendor.index.__f__("log", "at pages/my/my.vue:82", "经度：" + res.longitude);
        }
      });
      common_vendor.index.getLocation({
        type: "wgs84",
        success: function(res) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:89", "当前位置的经度：" + res.longitude);
          common_vendor.index.__f__("log", "at pages/my/my.vue:90", "当前位置的纬度：" + res.latitude);
        }
      });
      common_vendor.index.getLocation({
        success(res) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:96", res.latitude);
        },
        fail: (err) => {
          common_vendor.index.__f__("log", "at pages/my/my.vue:99", err);
        }
      });
    },
    wxpay() {
      common_vendor.index.getSystemInfo({
        success(res) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:106", res);
        }
      });
      common_vendor.index.requestPayment({
        provider: "wxpay",
        timeStamp: "1234567890",
        nonceStr: "acdefg",
        package: "prepay_id=1234567890",
        signType: "MD5",
        paySign: "abcdefg",
        success(res) {
          common_vendor.index.__f__("log", "at pages/my/my.vue:117", res);
        }
      });
    }
  }
};
if (!Array) {
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_uni_card + _easycom_uni_goods_nav2 + _component_uni_section)();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.codeStatus),
    d: common_vendor.o((...args) => $options.tohome && $options.tohome(...args)),
    e: common_vendor.o((...args) => $options.tocs && $options.tocs(...args)),
    f: common_vendor.o((...args) => $options.getlocation && $options.getlocation(...args)),
    g: common_vendor.o((...args) => $options.wxpay && $options.wxpay(...args)),
    h: common_vendor.p({
      ["is-full"]: true
    }),
    i: common_vendor.o(_ctx.onClick),
    j: common_vendor.p({
      title: "基础用法",
      type: "line"
    }),
    k: common_vendor.o(_ctx.onClick),
    l: common_vendor.o(_ctx.buttonClick),
    m: common_vendor.p({
      fill: true,
      options: _ctx.options,
      ["button-group"]: _ctx.customButtonGroup
    }),
    n: common_vendor.o(_ctx.onClick),
    o: common_vendor.o(_ctx.buttonClick),
    p: common_vendor.p({
      fill: true,
      options: _ctx.options,
      ["button-group"]: _ctx.customButtonGroup1
    }),
    q: common_vendor.p({
      title: "自定义用法",
      type: "line"
    }),
    r: common_vendor.o(_ctx.onClick),
    s: common_vendor.o(_ctx.buttonClick),
    t: common_vendor.p({
      options: _ctx.options,
      fill: true,
      ["button-group"]: _ctx.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
