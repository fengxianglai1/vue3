<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">12345
			<text class="title">{{title}}{{codeStatus}}</text>
		</view>
		<button @click="tohome">tohome</button>
		<button @click="tocs">tocs</button>
		<button @click="getlocation">getlocation</button>
		<button @click="wxpay">微信支付</button>
		
		<!--  #ifdef  MP-WEIXIN -->
		<!--  只在小程序中生效 -->
		<view>我是微信小程序</view>
		<!--  #endif -->
		 
		<!--  #ifdef  APP-PLUS -->
		<!--  只在 app 中生效 -->
		<view>我是 app </view>
		<!--  #endif -->
	</view>
		<view class="uni-container">
			<uni-card is-full>
				<text class="uni-h6"> uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</text>
			</uni-card>
			<uni-section title="基础用法" type="line">
				<uni-goods-nav @click="onClick" />
			</uni-section>
			<uni-section title="自定义用法" type="line">
				<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
					@buttonClick="buttonClick" />
				<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup1" @click="onClick"
					@buttonClick="buttonClick" style="margin-top: 20px;" />
			</uni-section>
			<view class="goods-carts">
				<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view>
	
		</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'my',
				codeStatus: ''
			}
		},
		onLoad() {
			// let _this = this
			// uni.request({
			// 	url:'Request URL: https://www.baidu.com/s?ie=utf-8&mod=1&isbd=1&isid=76F266F20FE14968&ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=1&oq=%25E7%2599%25BE%25E5%25BA%25A6&rsv_pq=eaa6e63a037cf643&rsv_t=9062c8T1tP4Qzsoa45MSOBD1W3%2BoHLFB7HeuVt2IzsxoeBR8fnSxIogD2a4&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=3&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=753&rsv_sug4=1677&bs=%E7%99%BE%E5%BA%A6&rsv_sid=undefined&_ss=1&clist=&hsug=&f4s=1&csor=1&_cr1=31838',
			// 	method:"GET",
			// 	success(data) {
			// 		console.log(data.statusCode)
			// 		uni.setStorageSync('codeStaus',data.statusCode)
			// 		_this.codeStatus= uni.getStorageSync('codeStaus')
			// 	}
			// });
			
			

		},
		methods: {
			tohome(){
				uni.navigateTo({
					url:'/pages/home/home?id=1&name=zhangsan'
				})
			},tocs(){
				uni.navigateTo({
					url:'/pages/cs/index?id=1&name=zhangsan'
				})
			},
			getlocation(){
				uni.chooseLocation({
					success: function (res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});

				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});
				// 获取地理位置
				uni.getLocation({
					success(res) {
						console.log(res.latitude)
					},
					fail:(err)=>{
						console.log(err)
					}
				})
			},
			wxpay(){
				uni.getSystemInfo({
					success(res) {
						console.log(res)
					}
				})
				uni.requestPayment({
					provider:'wxpay',
					timeStamp:'1234567890',
					nonceStr:'acdefg',
					package:'prepay_id=1234567890',
					signType:'MD5',
					paySign:'abcdefg',
					success(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
