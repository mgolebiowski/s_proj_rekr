const path = require('path');
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './dev/index.js',
  module: {
	loaders: [
		{
			test: /\.js$/,
			exclude: [/node_modules/],
			use: [{
			  loader: 'babel-loader?imports?jQuery=jquery,$=jquery,this=>window',
			  options: {
				  presets: ['env']
			  }
			}],
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  use: [{loader:'css-loader', options: {minimize: true}}, 'sass-loader']
			})
		},
		{ test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader",use:{loader:'css-loader', options: {minimize: true}}})}
    ,
    {
        test: /\.png$/, 
        loader: "file-loader"
    }
    ],
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
	new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
