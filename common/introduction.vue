<template>
	<view class="d-flex mx-3 pt-3">
		<image style="width: 250rpx;" :src="detail.images.small" mode="widthFix"></image>
		<view class="ml-3">
			<view style="font-size: 46rpx; color: #ffffff;">{{detail.title}}</view>
			<view class="mt-1 mb-2" style="font-size: 30rpx;color: #ffffff;">({{detail.year}})</view>
			<view class="mb-3" style="font-size: 22rpx; color: rgba(255,255,255,0.7);">
			{{detail.countries[0]}} / {{detail.genres.join(" ")}} / {{detail.pubdate}}({{detail.countries[0]}})上映 / 片长{{detail.durations[0]}}
			</view>
			<view class="d-flex btns text-center">
				<text class="bg-white mr-3" style="width: 200rpx; line-height: 60rpx;" type="default">想看</text>
				<text class="bg-white" style="width: 200rpx; line-height: 60rpx;" type="default">看过</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detail: {}
		}
	}
</script>

<style lang="scss">
	.btns {
		text {
			border-radius: 10rpx;
		}
	}
</style>
