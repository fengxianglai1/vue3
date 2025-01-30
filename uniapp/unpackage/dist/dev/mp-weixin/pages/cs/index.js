"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration,
    e: $data.indicatorDots,
    f: common_vendor.o((...args) => $options.changeIndicatorDots && $options.changeIndicatorDots(...args)),
    g: $data.autoplay,
    h: common_vendor.o((...args) => $options.changeAutoplay && $options.changeAutoplay(...args)),
    i: common_vendor.t($data.duration),
    j: common_vendor.o((...args) => $options.durationChange && $options.durationChange(...args)),
    k: $data.duration,
    l: common_vendor.t($data.interval),
    m: common_vendor.o((...args) => $options.intervalChange && $options.intervalChange(...args)),
    n: $data.interval
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cs/index.js.map
