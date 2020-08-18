const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('Webpack config, ', process.env.NODE_ENV)
module.exports = {
    entry: {
        javascript: "./app/main.js",
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.html$/,
            loader: "raw-loader"
        },
        {
            test: /\.riot$/,
            exclude: /node_modules/,
            use: [{
                loader: '@riotjs/webpack-loader',
                options: {
                    hot: process.env.NODE_ENV === 'development',
                }
            }]
        },

        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(sass|scss|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: '/',
                    hmr: process.env.NODE_ENV === 'development',
                    reloadAll: true,
                },
            },
                'css-loader', 'sass-loader'
            ],
        },
        {
            test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'app', 'index.html'),
        })
    ],
}