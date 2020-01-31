<template>
	<view class="mx-3 p-2 mt-2" style="background-color: rgba(0,0,0,0.1); border-radius: 20rpx;">
		<view class="d-flex mt-1">
			<text class="text-white flex-1" style="font-size: 22rpx;">豆瓣评分<text class="sup text-white">TM</text></text>
			<text style="color: rgba(255,255,255,0.7);"> &gt; </text>
		</view>
		<view class="d-flex">
			<view class="mr-3">
				<text class="text-white" style="font-size: 60rpx;">{{detail.rating.average}}</text>
				<uni-rate class="mt-2" max="5" size="12" :value="detail.rating.average/2" disabled active-color="#ffb712"></uni-rate>
			</view>
			<view>
				<uni-rate class="mt-2" size="10"></uni-rate>
				<uni-rate class="mt-2" size="10" max='4' disabled></uni-rate>
				<uni-rate class="mt-2" size="10" max='3' disabled></uni-rate>
				<uni-rate class="mt-2" size="10" max='2' disabled></uni-rate>
				<uni-rate class="mt-2" size="10" max='1' disabled></uni-rate>
			</view>
			<view class="cmd ml-2">
				<cmd-progress show-info="false" stroke-width="1" v-for="(item, i) in arr" :key="i" :percent="Math.round(item/total*100)"></cmd-progress>
			</view>
		</view>
	</view>
</template>

<script>
import uniRate from '../components/uni-rate/uni-rate.vue'
import cmdProgress from "../components/cmd-progress/cmd-progress.vue"

export default {
	data() {
		return {}
	},
	components: {
		uniRate,
		cmdProgress
	},
	props: {
		detail: {},
		arr: Array,
		total: Number
	}
}
</script>

<style>
	.sup {
		vertical-align: text-top;
		font-size: 20rpx;
	}
	.cmd {
		width: 300rpx;
	}
	uni-rate {
		display: block;
	}
</style>
