<template>
	<view>
		<view class="pb-2" style="margin-top: 30rpx; color: white;border-bottom: 1px solid white;" v-for="(item, index) in movies" :key="index">
			<view class="mx-3" style="display: flex;" @click="getMore(item.title)">
				<text style="flex: 1;">{{ item.title }}</text>
				<text> &gt; </text>
			</view>
			<scroll-view scroll-x="true">
				<view style="display: flex;padding:10rpx; text-align: center;">
					<view v-for="i in item.subjects" :key="i.id" @click="detail(i.id)">
						<image style="width: 200rpx; height: 220rpx; padding: 10rpx;" :src="i.images.small"></image>
						<text style="display: inline-block; width: 200rpx; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;font-size: 30rpx;">{{ i.title }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			movies: Array
		},
		methods: {
			detail(id) {
				uni.navigateTo({
					url: `../detail/detail?id=${id}`
				})
			},
			getMore(title) {
				uni.navigateTo({
					url: `../more/more?title=${title}`
				})
			}
		}
	}
</script>

<style>
</style>
