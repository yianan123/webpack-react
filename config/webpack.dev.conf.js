const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true, // 新增
        stats: {
            builtAt: true,
            cachedAssets: true,
            chunks: false,
            chunkOrigins: false,
            modules: false,
            entrypoints: false,
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})