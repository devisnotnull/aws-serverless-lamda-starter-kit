const merge = require('webpack-merge')

const { common } = require('./webpack.common')

module.exports = merge(common, {
    target: 'web',
    entry: {
        bundle: ['./client/index'],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dgram: 'empty',
        child_process: 'empty',
    },
})
