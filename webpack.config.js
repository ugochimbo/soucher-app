let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

let UglifyJSPluginConfig = new UglifyJSPlugin();

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "/" + Date.now() + ".js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [HTMLWebpackPluginConfig, UglifyJSPluginConfig]
};
