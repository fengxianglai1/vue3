"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msgList: [],
      //消息列表
      time: 3e3,
      //默认message时长
      id: 101,
      //message id
      elHeight: [],
      //所有盒子高度
      messageAniStyle: null,
      //动画样式
      closeInfo: {},
      //关闭消息盒子
      direction: "top",
      //方向
      safeHeight: 0,
      //安全高度
      count: {
        //计数器
        start: 0,
        end: 0
      },
      color: {
        success: "#67c23a",
        default: "#1989fa",
        warning: "#e6a23c",
        error: "#f56c6c"
      },
      icon: {
        success: "success",
        default: "info",
        warning: "warn",
        error: "clear"
      },
      directionStyle: {
        //方向样式控制
        top: {
          class: "show-message",
          style: {
            top: "5%"
          }
        },
        center: {
          class: "show-message-reverse",
          style: {
            top: "inherit",
            bottom: "50%"
          }
        },
        bottom: {
          class: "show-message-reverse",
          style: {
            top: "inherit",
            bottom: "10%"
          }
        }
      }
    };
  },
  mounted() {
    let that = this;
    common_vendor.index.getSystemInfo({
      //安全高度
      success: function(e) {
        that.safeHeight = e.safeArea.top + "px";
      }
    });
  },
  methods: {
    /**
     * @param {Object} options 参数配置
     */
    show(options) {
      options.id = this.createId();
      this.direction = options.direction || "top";
      options.customStyle = options.customStyle || {};
      let fontSizeNum = options.customStyle.fontSize ? Number(options.customStyle.fontSize.toString().replace(/\D/g, "")) : 32;
      options.type = options.type ? options.type : "default";
      let iconColor = options.iconColor ? options.iconColor : options.customStyle.color ? options.customStyle.color : this.color[options.type];
      options.class = this.directionStyle[this.direction].class;
      options.icon = options.icon === false ? "" : options.icon !== true && options.icon ? options.icon : this.icon[options.type];
      options.iconColor = iconColor;
      options.textColor = options.customStyle.color ? options.customStyle.color : options.type === "default" ? "#222222" : this.color[options.type];
      options.textSize = fontSizeNum + "rpx";
      !options.iconSize ? options.iconSize = fontSizeNum / 2 : "";
      if (this.direction !== "top" && this.msgList.length)
        this.msgList[0].class = "";
      setTimeout(() => {
        this.direction === "top" ? this.msgList.push(options) : this.msgList.unshift(options);
        this.closeInfo[options.id] = options;
        this.closeMessage(options);
      }, 50);
    },
    getClass(className) {
      const query = common_vendor.index.createSelectorQuery().in(this);
      return new Promise((resolve, rej) => {
        query.select("." + className).boundingClientRect((data) => {
          resolve(data);
        }).exec();
      });
    },
    closeMessage(options) {
      let timeNum = !isNaN(Number(options.time)) ? Number(options.time) : this.time;
      if (options.time === false)
        return;
      setTimeout(async () => {
        let dataA = [], dataB = [];
        this.msgList.forEach((item, index) => {
          item.time === false ? dataB.push(item) : dataA.push(item);
        });
        this.msgList = dataA.concat(dataB);
        let msgListLen = this.msgList.length;
        let lastLen = msgListLen - 1 - this.count.start;
        this.msgList = this.msgList.map((item, index) => {
          if (this.direction === "top") {
            if (index <= this.count.start)
              item.class = "close-message";
          } else {
            if (index >= lastLen)
              item.class = "close-message";
          }
          return item;
        });
        this.msgList.push();
        this.count.start++;
        let messageList = null;
        if (this.direction === "top") {
          messageList = await this.getClass("classList" + this.count.start);
        } else {
          let lastListIdx = this.msgList.length;
          messageList = await this.getClass("classList" + lastListIdx);
        }
        this.elHeight.push(messageList ? messageList.height : 41);
        let elHeight = this.elHeight.reduce(function(a, b) {
          return Number((a + b).toFixed(2));
        });
        let yNum = this.direction === "top" ? -elHeight : elHeight;
        this.messageAniStyle = {
          transform: "translate(-50%, " + yNum + "px)",
          transition: "all 0.4s"
        };
        setTimeout(() => {
          this.count.end++;
          if (this.count.start === this.count.end) {
            this.messageAniStyle = {};
            this.msgList = this.msgList.map((item, index) => {
              item.class = "";
              return item;
            });
            this.msgList.length - 1;
            if (this.direction === "top") {
              this.msgList.splice(0, this.count.start);
              this.elHeight.splice(0, this.count.start);
            } else {
              this.msgList.splice(-this.count.start, this.count.start);
              this.elHeight.splice(-this.count.start, this.count.start);
            }
            this.count.start = 0;
            this.count.end = 0;
          }
        }, 300);
      }, timeNum);
    },
    createId() {
      return ++this.id;
    },
    close(id) {
      if (id && this.closeInfo[id]) {
        let item = this.closeInfo[id];
        item.time = 10;
        this.closeMessage(item);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msgList, (item, index, i0) => {
      return {
        a: index,
        b: item.mask
      };
    }),
    b: $data.safeHeight + "px",
    c: common_vendor.f($data.msgList, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon,
        c: item.iconSize,
        d: item.iconColor ? item.iconColor : ""
      } : {}, {
        e: common_vendor.t(item.msg),
        f: item.textSize,
        g: item.textColor,
        h: common_vendor.s(item.customStyle),
        i: common_vendor.n(item.type + "-message"),
        j: common_vendor.n(item.class ? item.class : ""),
        k: common_vendor.n("classList" + (index + 1)),
        l: index
      });
    }),
    d: $data.safeHeight + "px",
    e: common_vendor.s($data.messageAniStyle),
    f: common_vendor.s($data.directionStyle[$data.direction].style)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/quick-message/quick-message.js.map
