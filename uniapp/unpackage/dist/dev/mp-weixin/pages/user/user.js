"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classes: "1-2",
      dataTree: [
        {
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0",
          children: [
            {
              text: "2.1班",
              value: "2-1"
            },
            {
              text: "2.2班",
              value: "2-2"
            }
          ]
        },
        {
          text: "三年级",
          value: "3-0",
          disable: true
        }
      ]
    };
  },
  methods: {
    onnodeclick(e) {
      common_vendor.index.__f__("log", "at pages/user/user.vue:51", e);
    },
    onpopupopened(e) {
      common_vendor.index.__f__("log", "at pages/user/user.vue:54", "popupopened");
    },
    onpopupclosed(e) {
      common_vendor.index.__f__("log", "at pages/user/user.vue:57", "popupclosed");
    },
    onchange(e) {
      common_vendor.index.__f__("log", "at pages/user/user.vue:60", "onchange:", e);
    }
  }
};
if (!Array) {
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_uni_card + _easycom_uni_data_picker2 + _component_uni_section)();
}
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
if (!Math) {
  _easycom_uni_data_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-full"]: true,
      ["is-shadow"]: false
    }),
    b: common_vendor.o($options.onchange),
    c: common_vendor.o($options.onnodeclick),
    d: common_vendor.o($options.onpopupopened),
    e: common_vendor.o($options.onpopupclosed),
    f: common_vendor.o(($event) => $data.classes = $event),
    g: common_vendor.p({
      placeholder: "请选择班级",
      ["popup-title"]: "请选择所在地区",
      localdata: $data.dataTree,
      modelValue: $data.classes
    }),
    h: common_vendor.p({
      title: "本地数据",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
