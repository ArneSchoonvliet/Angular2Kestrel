var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

console.log("@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@");

module.exports = {

    entry: {
        'app': './webclient/main-aot.ts' // aot compilation
    },

    output: {
        path: "./wwwroot/",
        filename: 'dist/[name].[hash].bundle.js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                loader: "file-loader?name=assets/[name]-[hash:6].[ext]",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/fonts',
                './wwwroot/assets',
                './wwwroot/api'
            ]
        ),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),

         new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'webclient/index.html'
        }),

        new CopyWebpackPlugin([
            { from: './webclient/app/assets/images/*.*', to: "assets/", flatten: true },
            { from: './webclient/api', to:'api/',flatten:false}
        ])
    ]

};