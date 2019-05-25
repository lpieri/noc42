'use strict'

const webpack = require ('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const HOST = 'localhost'
const PORT = 8080

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'self'",
    'script-src': ["'self'"],
	'style-src': ["'self'"],
	'img-src': ["'self'"]
};

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
		}
    ]
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new cspHtmlWebpackPlugin(cspConfigPolicy),
	new VueLoaderPlugin(),
	new HtmlWebpackPlugin({
		filname: 'index.html',
		template: 'index.html',
		inject: true
	})
  ]
}