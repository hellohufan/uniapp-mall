module.exports = {
	// 请求域名 格式： https://您的域名
	HTTP_REQUEST_URL: 'http://mall.fjssj.com',
	// #ifdef MP
	HTTP_REQUEST_URL: 'http://mall.fjssj.com',
	// #endif

	// #ifdef H5
	//H5接口是浏览器地址
	HTTP_REQUEST_URL: "http://mall.fjssj.com",//window.location.protocol+"//"+window.location.host,
	// #endif

	HEADER: {
		'content-type': 'application/json'
	},
	// 回话密钥名称 请勿修改此配置
	TOKENNAME: 'Authori-zation',
	// 缓存时间 0 永久
	EXPIRE: 0,
	//分页最多显示条数
	LIMIT: 10
};
