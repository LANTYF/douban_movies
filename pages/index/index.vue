<template>
	<scroll-view class="container" v-if="image">
		<image class="banner_image" :src="image" mode=""></image>
		<text class="btn" @click="enter">点击体验</text>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				image: ''
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData() {
				uni.showLoading({
					title: "载入中",
					mask:true
				})
				const res = await this.$http({
					url:'/in_theaters'
					})
				this.image = res[1].data.subjects[0].images.small
				uni.hideLoading()
			},
			enter(e) {
				uni.redirectTo({
					url:'../home/home'
				})
			}
		},
	}
</script>

<style lang="scss">
	.container {
		height: 100vh;
		position: relative;
		.banner_image {
			width: 100%;
			height: 100%;
		}
		.btn {
			display: inline-block;
			vertical-align: center;
			position: absolute;
			bottom: 120rpx;
			left: 50%;
			transform: translatex(-50%);
			z-index: 999;
			background-color: rgba(255,255,255,0.3);
			padding: 16rpx 24rpx;
			border-radius: 14rpx;
		}
	}
</style>
