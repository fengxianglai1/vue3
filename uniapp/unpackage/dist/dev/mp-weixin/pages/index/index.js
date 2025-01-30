"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      single: "",
      datetimesingle: "",
      range: ["2021-02-1", "2021-3-28"],
      datetimerange: [],
      start: Date.now() - 1e9,
      end: Date.now() + 1e9
    };
  },
  watch: {
    datetimesingle(newval) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:72", "单选:", this.datetimesingle);
    },
    range(newval) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:75", "范围选:", this.range);
    },
    datetimerange(newval) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:78", "范围选:", this.datetimerange);
    }
  },
  mounted() {
    setTimeout(() => {
      this.datetimesingle = Date.now() - 2 * 24 * 3600 * 1e3;
      this.single = "2021-2-12";
      this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"];
    }, 3e3);
  },
  methods: {
    change(e) {
      this.single = e;
      common_vendor.index.__f__("log", "at pages/index/index.vue:92", "change事件:", this.single = e);
    },
    changeLog(e) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:95", "change事件:", e);
    },
    maskClick(e) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:98", "maskClick事件:", e);
    },
    showMessage() {
      this.$refs.message.show({
        msg: "点击了1下"
      });
      this.$refs.message.show({
        type: "default",
        //String 默认default
        msg: "点击了消息提示窗",
        //String 显示内容 *
        direction: "top",
        //String 默认顶部显示
        icon: true,
        //Boolean|String 显示icon(false/true/string 默认显示icon)
        mask: true,
        //Boolean 遮罩（默认false没有遮罩）
        time: 5e3,
        //Number|Boolean 默认3000/false为不自动关闭
        customStyle: {
          //自定义样式
          color: "#FFFFFF",
          //字体图标色
          backgroundColor: "rgba(0,0,0,.5)"
          //背景色
        },
        iconSize: 16,
        //Number 自定义icon大小(单位px 默认16 设置后会覆盖自定义样式里的设置优先级最高)
        iconColor: ""
        //String icon颜色(默认主题颜色 设置后会覆盖自定义样式里的设置优先级最高)
      });
    }
  }
};
if (!Array) {
  const _easycom_quick_message2 = common_vendor.resolveComponent("quick-message");
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_quick_message2 + _component_uni_card + _component_uni_section + _easycom_uni_datetime_picker2)();
}
const _easycom_quick_message = () => "../../components/quick-message/quick-message.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_quick_message + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showMessage && $options.showMessage(...args)),
    b: common_vendor.sr("message", "5394b0c6-0"),
    c: common_vendor.p({
      ["is-full"]: true
    }),
    d: common_vendor.p({
      title: "日期用法：" + $data.single,
      type: "line"
    }),
    e: common_vendor.o($options.maskClick),
    f: common_vendor.o(($event) => $data.single = $event),
    g: common_vendor.p({
      type: "date",
      ["clear-icon"]: false,
      modelValue: $data.single
    }),
    h: common_vendor.p({
      title: "日期时间用法：" + $data.datetimesingle,
      type: "line"
    }),
    i: common_vendor.o($options.changeLog),
    j: common_vendor.o(($event) => $data.datetimesingle = $event),
    k: common_vendor.p({
      type: "datetime",
      modelValue: $data.datetimesingle
    }),
    l: common_vendor.p({
      title: "日期范围用法：[" + $data.range + "]",
      type: "line"
    }),
    m: common_vendor.o($options.maskClick),
    n: common_vendor.o(($event) => $data.range = $event),
    o: common_vendor.p({
      type: "daterange",
      modelValue: $data.range
    }),
    p: common_vendor.p({
      title: "日期时间范围用法：[" + $data.datetimerange + "]",
      type: "line"
    }),
    q: common_vendor.o(($event) => $data.datetimerange = $event),
    r: common_vendor.p({
      type: "datetimerange",
      rangeSeparator: "至",
      modelValue: $data.datetimerange
    }),
    s: common_vendor.p({
      title: "v-model用法：" + $data.single,
      type: "line"
    }),
    t: common_vendor.o(($event) => $data.single = $event),
    v: common_vendor.p({
      modelValue: $data.single
    }),
    w: common_vendor.p({
      title: "时间戳用法：" + $data.single,
      type: "line"
    }),
    x: common_vendor.o(($event) => $options.changeLog($event)),
    y: common_vendor.o(($event) => $data.single = $event),
    z: common_vendor.p({
      returnType: "timestamp",
      modelValue: $data.single
    }),
    A: common_vendor.p({
      title: "date 对象用法：" + $data.datetimesingle,
      type: "line"
    }),
    B: common_vendor.o($options.changeLog),
    C: common_vendor.o(($event) => $data.datetimesingle = $event),
    D: common_vendor.p({
      type: "datetime",
      returnType: "date",
      modelValue: $data.datetimesingle
    }),
    E: common_vendor.p({
      title: "插槽用法：" + $data.single,
      type: "line"
    }),
    F: common_vendor.o(($event) => $data.single = $event),
    G: common_vendor.p({
      modelValue: $data.single
    }),
    H: common_vendor.p({
      title: "无边框用法：" + $data.single,
      type: "line"
    }),
    I: common_vendor.o(($event) => $data.single = $event),
    J: common_vendor.p({
      border: false,
      modelValue: $data.single
    }),
    K: common_vendor.p({
      title: "隐藏清除按钮用法：" + $data.single,
      type: "line"
    }),
    L: common_vendor.o(($event) => $data.single = $event),
    M: common_vendor.p({
      clearIcon: false,
      modelValue: $data.single
    }),
    N: common_vendor.p({
      title: "disabled用法：" + $data.single,
      type: "line"
    }),
    O: common_vendor.o(($event) => $data.single = $event),
    P: common_vendor.p({
      disabled: true,
      modelValue: $data.single
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
