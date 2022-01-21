const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: false,
        clientLogLevel: 'info',
        compress: true,
        host: '0.0.0.0',
        port: process.env.DEV_SERVER_PORT,
        https: false,
        hot: true,
        writeToDisk: true,
        watchOptions: {
            poll: true
        },
        proxy: {
            '/api': {
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        },
        progress: false,
        contentBase: path.join(__dirname, "public"),
        watchContentBase: false,
        publicPath: '/',
        historyApiFallback: {
            index: 'index.html'
        }
    }

});