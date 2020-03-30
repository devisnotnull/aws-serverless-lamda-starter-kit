import { Store } from 'redux';

import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Request, Response } from 'express';
import { existsSync, readFileSync } from 'fs';

import { config } from '@config/index';
import { IConfig } from '@core/models/config';
import createStore from '@core/state/store';
import rootSaga from '@core/state/sagas';
import App from '@core/web/app';

import Html from './html';

let manifest: any = {};

try {
    if (existsSync(`${__dirname}/asset-manifest.json`)) {
        const re = readFileSync(`${__dirname}/asset-manifest.json`).toString();
        manifest = JSON.parse(re);
    } else {
        console.error('The file does not exist.');
    }
} catch (err) {
    console.error(err);
}

/**
 *
 * @param url
 * @param store
 * @param assets
 * @param res
 */
const renderApp = (
    url: string,
    res: Response,
    store: Store,
    appConfiguration: Partial<IConfig>
): string => {
    const response: string = '';
    const PROD = process.env.NODE_ENV === 'production';
    const context = {
        splitPoints: [],
    };

    console.log('appConfiguration, ', appConfiguration);
    const rootComponent = PROD ? (
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>
    ) : null;
    (store as any)
        .runSaga(rootSaga, appConfiguration)
        .toPromise()
        .then(() => {
            // Get state from store after sagas were run and strigify it for rendering in HTML
            const state = store.getState();
            const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify({
                ...state,
                config: { config: appConfiguration },
            })}`;
            const splitPoints = `window.__SPLIT_POINTS__ = ${JSON.stringify(context.splitPoints)}`;
            const html = renderToString(
                <Html
                    PROD={PROD}
                    assets={manifest}
                    rootComponent={rootComponent}
                    initialState={initialState}
                    splitPoints={splitPoints}
                />
            );
            res.send(html);
        });
    // Dispatch a close event so sagas stop listening after they're resolved
    (store as any).closeSagas();
    return response;
};

/**
 *
 * @param req
 * @param res
 */
export const renderPageExpress = (req: Request, res: Response): string => {
    const history = createHistory();
    const store = createStore(history);
    const appConfiguration: Partial<IConfig> = config;
    return renderApp(req.url, res, store, appConfiguration);
};
