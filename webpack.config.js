var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        root: [
            path.resolve('./app/_global/components') //这个是根目录，进来之后先去找这个
        ],
        extensions: ['', '.js', '.jsx'] //拓展，以后带有'','.js','.jsx'可以省略不写，如：dome.js 可以写成dome
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
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
