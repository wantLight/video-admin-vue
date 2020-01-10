/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'http://localhost:8085';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://localhost:8085';
	baseImgPath = 'http://localhost:8085';
	
	// baseUrl = 'http://120.79.143.66:8085';
    // baseImgPath = 'http://120.79.143.66:8080/video';
}else{
	baseUrl = 'http://120.79.143.66:8085';
    baseImgPath = 'http://120.79.143.66:8080/video';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
