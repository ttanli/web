const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'天天安利日报',
            template: './public/index.html'
        })
    ],
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8081
    }
}