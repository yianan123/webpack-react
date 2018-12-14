const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}
module.exports = {
    entry: {
        main: resolve('src/index.js')
    },
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.sass', '.scss', '.less', '.jsx', '.tsx', 'png', 'jpg', 'jpeg', 'gif'],
    },
    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true,
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.[name].css',
            chunkFilename: 'css/app.[contenthash:12].css' // use contenthash *
        }),

    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },

        ]
    }

}