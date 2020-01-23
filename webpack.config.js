const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'dist/index': './src/index.js',
        'demo/dist/test': './demo/index.js',
    },
    devtool: 'sourcemaps',
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    },
};