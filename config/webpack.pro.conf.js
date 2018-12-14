const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin'); //打包前清楚dist
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //css压缩

const  path = require('path')

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    stats:{
        builtAt: true,
        chunkOrigins: false,
        warnings: false,
        reasons: false,
        chunks: false,
        chunkModules:false,
        modules: false,
        entrypoints: false,
        performance: true,
        version: true,
    },
    plugins:[
        new CleanWebpackPlugin('dist', {
            root: resolve(''),
            verbose: true,
            dry: false
        }),
        new OptimizeCSSAssetsPlugin()
    ],
    optimization: {
        minimize: true, 
        providedExports: true,
        usedExports: true,
  
        sideEffects: true,

        concatenateModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            chunks: "all",
            minSize: 40, //模块大于30k会被抽离到公共模块
            minChunks: 2, //模块出现1次就会被抽离到公共模块
            maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
            maxInitialRequests: 4, //入口模块最多只能加载3个
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                'react': {
                    chunks: 'initial', 
                    test: /[\\/]node_modules[\\/]react/,
                    name: 'react-vendor',
                    priority: -9,
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },

            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    }
})