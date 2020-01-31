<template>
	<view class="mt-3">
		<view class="mx-3 d-flex mb-3">
			<text class="text-white flex-1">演职员</text>
			<text class="fs-xs" style="color: rgba(255,255,255,0.7);">全部 ></text>
		</view>
		<scroll-view scroll-x="true">
			<view class="d-flex ml-3">
				<view class="mr-3" v-for="item in detail.casts" :key="item.id">
					<image style="width: 160rpx;" mode="widthFix" :src="item.avatars.small"></image>
					<view class="text-white">{{item.name}}</view>
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
