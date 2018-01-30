const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });
module.exports = {
    cache: true,
    entry: [
        'webpack-hot-middleware/client',
        '../app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    target: 'node',
    externals: nodeModules,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}