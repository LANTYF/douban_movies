<template>
	<view class="mt-3">
		<view class="mx-3 d-flex mb-3">
			<text class="text-white flex-1">预告片/剧照</text>
			<text class="fs-xs" style="color: rgba(255,255,255,0.7);">全部 ></text>
		</view>
		<scroll-view scroll-x="true" >
			<view class="d-flex">
				<view v-for="item in detail.photos" :key="item.id">
					<image style="width: 400rpx; height: 250rpx;" mode="aspectFill" :src="item.image"></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			detail: {}
		}
	}
</script>

<style>
</style>
