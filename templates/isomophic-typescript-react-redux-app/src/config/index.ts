import { merge } from 'ramda';
import { IConfig } from '@core/models/config';

export type Environment = 'common' | 'development' | 'production';

type Config = {
    [key in Environment]: Partial<IConfig>;
};

const env = process.env.NODE_ENV || 'development';

const defaultConfig: Config = {
    common: {
        env,
        graphql: 'https://graphqlzero.almansi.me/api',
        rest: 'https://jsonplaceholder.typicode.com',
    },
    development: {},
    production: {},
};

export const config: Partial<IConfig> = merge<Partial<IConfig>, Partial<IConfig>>(
    defaultConfig.common,
    defaultConfig[env]
);
