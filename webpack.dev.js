const { merge } = require('webpack-merge');
const { join, resolve } = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const dirname = resolve();

module.exports = merge(common, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			__BUILD__: JSON.stringify('dev'),
		}),
	],
	devServer: {
		static: join(dirname, './build'),
		compress: true,
		historyApiFallback: true,
		port: process.env.PORT || 4000,
		hot: false,
	},
});
