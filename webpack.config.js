const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: './src/Main.js',
    output: {
        filename: 'Main.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adds css to the DOM injecting the <style> tag
                'css-loader', // interprets @import, url() ...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
};