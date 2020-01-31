<template>
	<view class="detail" v-if="isShow">
		<introduction :detail = "detail"></introduction>
		<scores :detail="detail" :arr="arr" :total="total"></scores>
		<top cont="选座购票"></top>
		<category-scroll :detail="detail"></category-scroll>
		<abstract :detail='detail'></abstract>
		<cast :detail="detail"></cast>
		<photo :detail="detail"></photo>
	</view>
</template>

<script>
	import introduction from '../../common/introduction.vue'
	import scores from '../../common/scores.vue'
	import top from '../../common/top.vue'
	import categoryScroll from '../../common/cartegory-scroll.vue'
	import abstract from '../../common/abstract.vue'
	import cast from '../../common/cast.vue'
	import photo from '../../common/photo.vue'
	
	export default {
		data() {
			return {
				id: '',
				detail: {},
				isShow: false,
				total: '',
				arr: [],
				reverseArr: []
			}
		},
		components:{
			introduction,
			scores,
			top,
			categoryScroll,
			abstract,
			cast,
			photo
		},
		methods: {
			async getDetail() {
				uni.showLoading({
					title:"载入中",
					mask:true
				})
				const res = await this.$http({
					url: `/subject/${this.id}`
				})
				console.log(res[1].data)
				this.detail = res[1].data
				uni.hideLoading()
				this.isShow = true
				this.getTotal()
			},
			getTotal() {
				for (let i in this.detail.rating.details) {
					this.arr.push(this.detail.rating.details[i])
				}
				this.arr = this.arr.reverse()
				this.total = this.arr.reduce((pre, val) => pre + val)
			},
		},
		onLoad(options) {
			this.id = options.id
			this.getDetail()
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #7F766D;
	}
</style>
