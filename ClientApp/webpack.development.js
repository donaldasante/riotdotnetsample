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
        port: 8080,
        https: false,
        hot:true,
        watchOptions: {
            poll: true
        },
        proxy: {
            '/api': {
                target: 'https://localhost:5001',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            },
        },
        progress: false,
        contentBase: path.join(__dirname, "public"),
        watchContentBase: true,
        public: 'https://localhost:5001',
        publicPath: '/',
        historyApiFallback: {
            index: 'index.html'
        }
    }

});