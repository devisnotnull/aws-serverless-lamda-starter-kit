import { merge } from 'ramda'
import { AppConfig } from '@core/models/config'

export type Environment = 'common' | 'development' | 'production'

type Config = {
    [key in Environment]: Partial<AppConfig>
}

const env = process.env.NODE_ENV || 'development'

const defaultConfig: Config = {
    common: {
        env,
        graphql: 'https://graphqlzero.almansi.me/api',
    },
    development: {
    },
    production: {
    },
}

export const config: Partial<AppConfig> = merge<Partial<AppConfig>, Partial<AppConfig>>(
    defaultConfig.common,
    defaultConfig[env]
)
