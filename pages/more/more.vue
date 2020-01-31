<template>
	<view>
		<view class="mx-3">
			<text class="text-white">{{movies.title}}</text>
			<text class="ml-2 text-gray">{{movies.subjects.length}}</text>
		</view>
		<view>
			<view v-for="item in movies.subjects" :key="item.id" @click="detail(item.id)">
				<view class="d-flex mx-3 pt-3 pb-3" style="border-bottom: 1px solid white;">
					<image style="width: 250rpx;" :src="item.images.small" mode="widthFix"></image>
					<view class="ml-3">
						<view style="font-size: 46rpx; color: #ffffff;">{{item.title}}</view>
						<view class="mt-1 mb-2" style="font-size: 30rpx;color: #ffffff;">({{item.year}})</view>
						<view class="mb-3">
							<text class="text-white">{{item.rating.average}}</text>
						</view>
						<view style="font-size: 22rpx; color: rgba(255,255,255,0.7);">
						{{item.genres.join(" ")}} / {{item.mainland_pubdate}}({{item.countries[0]}})上映 / 片长{{item.durations[0]}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles:["即将上映的电影", "豆瓣电影新片榜", "正在上映的电影-北京"],
				urls: ['/coming_soon', '/new_movies', '/in_theaters'],
				movies: []
			}
		},
		methods: {
			async getData(i) {
				const res = await this.$http({
					url: `${this.urls[i]}` || ''
				})
				this.movies = res[1].data
			},
			detail(id) {
				uni.navigateTo({
					url: `../detail/detail?id=${id}`
				})
			}
		},
		onLoad(options) {
			console.log(options)
			for (let i in this.titles) {
				if (this.titles[i].indexOf(options.title) === 0) {
					this.getData(i)
				}
			}
		}
	}
</script>

<style>
page {
	background-color: #1D344E;
}
</style>
