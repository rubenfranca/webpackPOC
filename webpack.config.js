const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/Main.js',
    output: {
        filename: 'Main.js',
        path: __dirname + '/public'
    }
};