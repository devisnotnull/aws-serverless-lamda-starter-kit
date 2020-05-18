const merge = require('webpack-merge')

const nodeExternals = require('webpack-node-externals')

const paths = require('./paths')
const { common } = require('./webpack.common')

module.exports = merge(common, {
    target: 'node',
    entry: {
        index: ['./server/index'],
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'isomorphic-style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                mode: 'local',
                                localIdentName: '[local][hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            root: paths.src,
                        },
                    },
                ],
            },
        ],
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false,
        __filename: false,
    },
})
