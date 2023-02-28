const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: {
		components: './src/pages/Components/index.js',
		trade: './src/pages/Trade/index.js',
		wallets: './src/pages/Wallets/index.js',
		transfer: './src/pages/Wallets/Transfer/index.js',
		dashboard: './src/pages/Dashboard/index.js',
		bots: './src/pages/Bots/index.js',
		emptyBots: './src/pages/Bots/EmptyBots/index.js'
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
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
		new HtmlWebpackPlugin({
			filename: 'wallets.html',
			template: 'src/pages/Wallets/index.html',
			chunks: ['wallets'],
		}),
		new HtmlWebpackPlugin({
			filename: 'dashboard.html',
			template: 'src/pages/Dashboard/index.html',
			chunks: ['dashboard'],
		}),
		new HtmlWebpackPlugin({
			filename: 'transfer.html',
			template: 'src/pages/Wallets/Transfer/index.html',
			chunks: ['transfer'],
		}),
		new HtmlWebpackPlugin({
			filename: 'bots.html',
			template: 'src/pages/Bots/index.html',
			chunks: ['bots'],
		}),
		new HtmlWebpackPlugin({
			filename: 'empty-bots.html',
			template: 'src/pages/Bots/EmptyBots/index.html',
			chunks: ['emptyBots'],
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
