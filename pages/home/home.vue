<template>
	<view class="home" v-if="Object.keys(movies).length !== 0">
		<l_swipper :images="movies[0].subjects"></l_swipper>
		<list :movies="movies"></list>
	</view>
</template>

<script>
	import l_swipper from '../../components/l_swipper/l_swiper.vue'
	import list from '../../common/list.vue'
export default {
	data() {
		return {
			movies: []
		};
	},
	components:{
		l_swipper,
		list
	},
	created() {
		this.getNow();
		this.getComing()
		this.getNew()
	},
	methods: {
		// ------------获取接口数据--------------
		async getNow() {
			const res = await this.$http({
				url: '/in_theaters',
				data: {
					start: 0,
					count: 8
				}
			})
			this.movies.push(res[1].data)
		},
		async getComing() {
			const res = await this.$http({
				url: '/coming_soon',
				data: {
					start: 0,
					count: 8
				}
			})
			this.movies.push(res[1].data)
		},
		async getNew() {
			const res = await this.$http({
				url: '/new_movies',
				data: {
					start: 0,
					count: 8
				}
			})
			this.movies.push(res[1].data)
		},
		
	}
};
</script>

<style>
.home {
	background-color: #1d344e;
}
.swiper_image {
	width: 100%;
}
</style>
