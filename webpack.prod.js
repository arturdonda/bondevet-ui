const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { join, resolve } = require('path');
const common = require('./webpack.common.js');

const dirname = resolve();

module.exports = merge(common, {
	resolveLoader: {
		modules: [join(dirname, 'node_modules')],
	},
	plugins: [
		new webpack.DefinePlugin({
			__BUILD__: JSON.stringify('prod'),
		}),
	],
});
