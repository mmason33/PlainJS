const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'sourcemaps',
    output: {
        path: path.resolve(__dirname, './'),
        filename: './dist/[name].js',
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