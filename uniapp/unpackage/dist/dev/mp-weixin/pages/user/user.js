"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 当前选择的城市
      city: {
        code: "",
        name: "定位中..."
      },
      // 热门城市
      hotCity: [
        { code: "110100", name: "北京" },
        { code: "310100", name: "上海" },
        { code: "330100", name: "杭州" },
        { code: "440100", name: "广州" },
        { code: "440300", name: "深圳" },
        { code: "320100", name: "南京" },
        { code: "500100", name: "重庆" },
        { code: "510100", name: "成都" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    // 点击城市选项
    select(city) {
      this.city = city;
    },
    // 打开城市选择页面
    open() {
      this.$refs.citySelect.open();
    }
  }
};
if (!Array) {
  const _easycom_unicloud_city_select2 = common_vendor.resolveComponent("unicloud-city-select");
  _easycom_unicloud_city_select2();
}
const _easycom_unicloud_city_select = () => "../../uni_modules/unicloud-city-select/components/unicloud-city-select/unicloud-city-select.js";
if (!Math) {
  _easycom_unicloud_city_select();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.open()),
    b: common_vendor.t($data.city.name),
    c: common_vendor.t($data.city.code),
    d: common_vendor.sr("citySelect", "0f7520f0-0"),
    e: common_vendor.o($options.select),
    f: common_vendor.p({
      ["hot-city"]: $data.hotCity,
      location: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
