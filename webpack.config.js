const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/Main.js',
    output: {
        filename: 'Main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adds css to the DOM injecting the <style> tag
                'css-loader', // interprets @import, url() ...
            ]
        }]
    }
};