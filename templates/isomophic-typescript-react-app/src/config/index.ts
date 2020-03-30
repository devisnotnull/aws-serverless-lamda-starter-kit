import { merge } from 'ramda';
import { IAppConfig } from '@core/models/config';

export type Environment = 'common' | 'development' | 'production';

type Config = {
    [key in Environment]: Partial<IAppConfig>;
};

const env = process.env.NODE_ENV || 'development';

const defaultConfig: Config = {
    common: {
        env,
        graphql: 'https://graphqlzero.almansi.me/api',
    },
    development: {},
    production: {},
};

export const config: Partial<IAppConfig> = merge<Partial<IAppConfig>, Partial<IAppConfig>>(
    defaultConfig.common,
    defaultConfig[env]
);
