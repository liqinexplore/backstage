var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    resolve: {
        root: [
            path.resolve('./app/_global/components')
        ],
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.scss$/,
            loader: "style!css!sass"
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
