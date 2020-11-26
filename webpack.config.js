'use strict';
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		appA: [
			'./src/apps/appA/index.js'
		],
		appB: [
			'./src/apps/appB/index.js'
		],
	},
	mode: 'development',
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: false // speed up Tailwind build?
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: false // speed up Tailwind build?
						}
					}
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	output: {
		path: `${__dirname}/dist`,
		filename: '[name]/[name].js',
		publicPath: '../'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `css/[name].css`,
			chunkFilename: `css/chunks/[name].css`
		})
	]
};