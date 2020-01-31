export default params => {
	const baseUrl = 'https://douban-api.uieee.com/v2/movie'
	return uni.request({
	    url: baseUrl + params.url,
			method: params.method || 'GET',
			data: params.data,
			header: {
				"content-type": "json"
			}
	});
}