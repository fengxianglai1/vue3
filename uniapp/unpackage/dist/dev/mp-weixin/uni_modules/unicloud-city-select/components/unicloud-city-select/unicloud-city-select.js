"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uniMapCo = common_vendor.er.importObject("uni-map-co", {
  customUI: true
});
const db = common_vendor.er.database();
const _ = db.command;
_.aggregate;
const _sfc_main = {
  name: "unicloud-city-select",
  emits: ["mounted", "select"],
  props: {
    // 热门城市列表
    hotCity: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 是否自动获取定位所在的城市
    location: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    let { location } = this;
    if (location)
      this.getLocation();
    this.$emit("mounted");
  },
  methods: {
    // 打开选择页面
    open() {
      common_vendor.index.navigateTo({
        url: `/uni_modules/unicloud-city-select/pages/uni-city-list/uni-city-list`,
        events: {
          select: (data) => {
            this.$emit("select", data);
          }
        },
        success: (res) => {
          res.eventChannel.emit("data", {
            hotCity: this.hotCity
          });
        }
      });
    },
    // 获取定位所在城市
    getLocation() {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: async (res) => {
          let location2addressRes = await uniMapCo.location2address({
            location: `${res.latitude},${res.longitude}`
          });
          this.city = {
            code: parseInt(Number(location2addressRes.result.result.adcode) / 100) * 100 + "",
            name: location2addressRes.result.result.city
          };
          this.$emit("select", this.city);
        }
      });
    }
  },
  watch: {},
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/unicloud-city-select/components/unicloud-city-select/unicloud-city-select.js.map
