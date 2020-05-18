const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')

const server = require('./webpack.server.common')

module.exports = merge(server, {
    devtool: 'source-map',
    output: {
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
        ],
    },
})
