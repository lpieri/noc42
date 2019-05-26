'use strict'

const webpack = require ('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HOST = 'localhost'
const PORT = 8080

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  devServer: {
    clientLogLevel: 'warning',
	hot: true,
	watchOptions: {
		poll: true
	},
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    overlay: { warnings: false, errors: true },
	publicPath: '/',
    quiet: true
  },
  module: {
    rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						// options...
					}
				}
			]
		},
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [
				{
				loader: 'file-loader',
				options: {},
				},
			],
		},
    ]
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new MiniCssExtractPlugin({
		filename: 'css/[name].bundle.css'
	}),
	new VueLoaderPlugin(),
	new HtmlWebpackPlugin({
		filname: 'index.html',
		template: 'index.html',
		inject: true
	})
  ]
}