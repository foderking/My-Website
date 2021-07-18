const path = require('path')
const minicss = require('mini-css-extract-plugin')
var mode = process.env.NODE_ENV || 'devel'

const config = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	plugins: [new minicss()],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: [ '@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.css$/,
				use: [minicss.loader, 'css-loader'],
			},

		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
		compress: true,
		port: 4444,
	},
	devtool: (mode === 'devel') ? 'source-map' : false,
	resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  }
}

module.exports = config
