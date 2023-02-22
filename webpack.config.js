const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: {
		components: './src/pages/Components/index.js',
		trade: './src/pages/Trade/index.js'
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'src/assets', to: 'assets' },
			],
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'components.html',
			template: 'src/pages/Components/index.html',
			chunks: ['components'],
		}),
		new HtmlWebpackPlugin({
			filename: 'trade.html',
			template: 'src/pages/Trade/index.html',
			chunks: ['trade'],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css'
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		hot: true,
	},
};
