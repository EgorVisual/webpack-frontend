const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
module.exports = {
    entry: ["@babel/polyfill", './src/index.js'],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        // new HTMLWebpackPlugin({
        //     template: "./templates/authorization/auth.html",
        //     filename: 'auth.html',
        // }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader']
            }, {
                test: /\.s[ac]ss/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                    'css-loader',
                    'sass-loader']
            }, {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};

