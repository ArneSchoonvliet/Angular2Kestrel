var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

console.log("@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@");

module.exports = {

    devtool: 'source-map',

    entry: {
        'app': './webclient/main.ts' // JiT compilation
    },

    output: {
        path: "./wwwroot/",
        filename: 'dist/[name].bundle.js',
        chunkFilename: '[id].chunk.js',
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
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader',
                    'source-map-loader'                    
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
                './wwwwroot',
                './wwwroot/dist',
                './wwwroot/fonts',
                './wwwroot/assets',
                './wwwroot/api'
            ]
        ),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'webclient/index.html'
        }),
        new CopyWebpackPlugin([
            { from: './webclient/assets/images/*.*', to: "assets/", flatten: true },
            { from: './webclient/api', to:'api/',flatten:false}
        ]),

        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development 
            host: 'localhost',
            port: 5000,
            // proxy the Webpack Dev Server endpoint 
            // (which should be serving on http://localhost:3100/) 
            // through BrowserSync 
            proxy: 'http://localhost:3000/',
        },
        // plugin options 
        {
            // prevent BrowserSync from reloading the page 
            // and let Webpack Dev Server take care of this 
            reload: true
        })
    ]

};