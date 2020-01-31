<template>
	<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
		<swiper-item v-for="item in images" :key="item.id">
			<image class="swiper_image" :src="item.images.small" mode="widthFix" @click="detail(item.id)"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			images: Array
		},
		methods: {
			detail(id) {
				uni.navigateTo({
					url: `../detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style>
</style>
