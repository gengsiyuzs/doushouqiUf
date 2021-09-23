/**
 * @file 打包编译配置
 * @author v_gengsiyu
 * @date 2019-10-15
 * */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let publicPath = path.resolve(__dirname, './dist/');
/*const fs = require('fs');
fs.open('./resources/js/env.js', 'w', function (err, fd) {
    const buf = `/!** @file 环境切换变量*!/\n
export default {
    env: 'production',
    serverUrl: '/',
    domain: window.location.origin
};`;
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
    });
});*/

function resolve(dir) {
    return path.join(__dirname, dir);
}

let plugins = [
    new ExtractTextPlugin({
        filename: '../css/[name].min.css',
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
];
module.exports = {
    entry: {
        main: './resources/js/entry.js'
    },
    output: {
        path: path.resolve(publicPath, 'js'),
        publicPath: '/js/',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                exclude: /node_modules/,
                test: /\.(jpg|png)\??.*$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=./img/&outputPath=../css/img/'
            },
            {
                test: /\.(gif|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('./resources/js'),
            'env': resolve('./resources/js/env.js')
        }
    },
    plugins: plugins
};
