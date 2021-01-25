const webpack = require('webpack');
const path = require('path');
module.exports = {
	//其他的配置 
	// 配置webpack相关
	configureWebpack: config => {
		// 定义全局变量
		config.plugins.push(new webpack.ProvidePlugin({
			// Moment: 'moment', // 你要引入的 第三方库 
			// Utils: path.resolve(__dirname, "./src/utils.js"), // 组件 / 通用方法  (注意路径修改)
			'@': path.resolve(__dirname, './src')
		}))
	}
}