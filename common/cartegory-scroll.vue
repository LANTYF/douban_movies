<template>
	<scroll-view scroll-x="true" class="mt-3 mx-3">
		<view class="" style="white-space: nowrap;">
			<text class="fs-xs mr-2" style="color: rgba(255,255,255,0.7);">相关分类</text>
			<text class="text-white py-1 px-2 mr-2" style="display: inline-block; background-color: rgba(0,0,0,0.1); border-radius: 200rpx;" v-for="item in detail.tags" :key="item">{{item}} &gt;</text>		
		</view>
	</scroll-view>
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
