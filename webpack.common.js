const { join, resolve } = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const dirname = resolve();

const config = {
	entry: './src/main/public/index.tsx',
	target: 'web',
	output: {
		filename: 'build.js',
		path: resolve(dirname, 'build'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader',
				options: {
					name: 'assets/[name].[ext]',
					limit: 50,
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
		alias: {
			'@domain': path.resolve(__dirname, 'src/domain/'),
			'@application': path.resolve(__dirname, 'src/application/'),
			'@infra': path.resolve(__dirname, 'src/infra/'),
			'@presentation': path.resolve(__dirname, 'src/presentation/'),
			'@main': path.resolve(__dirname, 'src/main/'),
		},
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new HWP({
			template: join(dirname, 'src/main/public/index.html'),
			favicon: join(dirname, 'src/main/public/favicon.ico'),
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};

module.exports = config;
