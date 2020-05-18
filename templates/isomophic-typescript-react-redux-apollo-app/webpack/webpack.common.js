const CircularDependencyPlugin = require('circular-dependency-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')

const paths = require('./paths')

const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const isProduction = NODE_ENV === 'production'
const target = process.env.TARGET || 'client'
const isClient = target === 'client'
const publicPath = '/'

const common = {
    mode: NODE_ENV,
    context: paths.src,
    output: {
        publicPath,
        path: paths.dist,
    },
    resolve: {
        mainFields: ['module', 'browser', 'main'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@style': './core/web/style',
        },
    },
    module: {
        rules: [
            {
                test: /\.m?([jt])sx?$/,
                exclude: paths.nodeModules,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    compact: isProduction,
                    cacheIdentifier: target,
                    configFile: paths.babelConfig,
                    cacheCompression: isProduction,
                },
            },
            {
                test: /\.m?([jt])sx?$/,
                loader: 'babel-loader',
                include: paths.nodeModules,
                exclude: [/@babel(?:\/|\\{1,2})runtime/, /core-js/],
                options: {
                    babelrc: false,
                    compact: false,
                    configFile: false,
                    sourceMaps: false,
                    cacheDirectory: true,
                    cacheCompression: isProduction,
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,
                                useBuiltIns: false,
                                exclude: ['transform-typeof-symbol'],
                            },
                        ],
                    ],
                },
            },
            {
                loader: 'file-loader',
                exclude: [/\.m?([jt])sx?$/, /\.json$/, /\.s?css$/],
                options: {
                    emitFile: isClient,
                    name: 'assets/[name].[hash:8].[ext]',
                },
            },
        ],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: paths.tsConfig,
            eslint: true,
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            cwd: process.cwd(),
        }),
        new webpack.ProgressPlugin({
            activeModules: false,
        }),
    ],
    stats: {
        colors: true,
        modules: true,
        children: true,
    },
    performance: {
        hints: 'warning',
    },
}

module.exports = {
    common,
    publicPath,
    isProduction,
    isDevelopment,
}
