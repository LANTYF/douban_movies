<template>
	<view class="mx-3 mt-3">
		<text class="text-white">剧情简介</text>
		<view class="mt-3">
			<text v-if="!spand" class="text-white">{{detail.summary.slice(0,70)}}...</text>
			<text v-else class="text-white">{{detail.summary}}</text>
			<view v-if="!spand" @click="show" style="float: right; color: rgba(255,255,255,0.7);">展开</view>
			<view v-if="spand" @click="show" style="float: right; color: rgba(255,255,255,0.7)">收缩</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				spand: false
			}
		},
		methods: {
			show() {
				this.spand = !this.spand
			}
		},
		props: {
			detail: {}
		}
	}
</script>

<style>
</style>
