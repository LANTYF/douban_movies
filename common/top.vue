<template>
	<view class="mx-3 d-flex mt-3 pb-2" style="border-bottom: 1px solid rgba(255,255,255,0.7);">
		<text class="flex-1 text-white">{{cont}}</text>
		<text class="mr-2 text-white">&gt;</text>
	</view>
</template>

<script>
	export default {
		props: {
			cont: ''
		}
	}
</script>

<style>
</style>
