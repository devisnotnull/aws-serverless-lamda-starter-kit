/// <reference path="../../typings/index.d.ts" />

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import { resolve } from 'path';
import { createServer, Server } from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';

import { renderPageExpress } from './render';

const PROD: boolean = process.env.NODE_ENV === 'production';

const app: Express = express();

app.use('/static', express.static('static'));
app.use('/static', express.static(__dirname + '/static'));

app.use(express.static('static'));
app.use(express.static(__dirname + '/static'));

export const getRequire = () =>
    typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;

if (!PROD) {
    const webpackConfig = getRequire()(resolve(process.cwd(), 'webpack.config'));
    const compiler = webpack(webpackConfig);
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            serverSideRender: true,
            stats: 'errors-only',
            logLevel: 'error',
        })
    );
    app.use(webpackHotMiddleware(compiler, { log: console.log }));
}

app.get('*', renderPageExpress);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found');
    (err as any).status = 404;
    next(err);
});

// error handler
app.use((err: any, req: Request, res: Response) => {
    if (PROD) console.error('error : ', err.message);
    else console.error('error : ', err);
    res.status(err.status || 500);
});

const server: Server = createServer(app);

server.listen(3000, () => {
    console.info(`✅ ${'Listening on:'} ${'localhost::'}`);
});
