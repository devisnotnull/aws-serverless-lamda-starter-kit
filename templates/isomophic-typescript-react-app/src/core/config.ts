import { merge } from 'ramda'

export type Environment = 'common' | 'development' | 'production'

export interface AppConfig {
    env: string
    isDev: boolean
    apiUrl: string
    useRender: boolean
    isBrowser: boolean
}

type Config = {
    [key in Environment]: Partial<AppConfig>
}

const isBrowser = process && (process as any).browser
const env = process.env.NODE_ENV || 'development'

const defaultConfig: Config = {
    common: {
        env,
        isBrowser,
    },
    development: {},
    production: {},
}

export const config: Partial<AppConfig> = merge<Partial<AppConfig>, Partial<AppConfig>>(
    defaultConfig.common,
    defaultConfig[env]
)
