import convict from 'convict';

// Define a schema
const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    ip: {
        doc: 'The IP address to bind.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port',
    },

    aws: {
        region: {
            doc: 'The AWS region.',
            format: String,
            default: 'eu-west-1',
            env: 'AWS_REGION',
        },
        endpoint: {
            doc: 'The AWS endpoint.',
            format: String,
            default: 'https://dynamodb.eu-west-1.amazonaws.com',
            env: 'AWS_ENDPOINT',
        },
        retries: {
            doc: 'Default number of retries',
            format: Number,
            default: 3,
            env: 'AWS_RETRIES',
            arg: 'aws-retries',
        },
    },

    services: {
        optionGroup: {
            table: 'ecom-option-group',
        },
        options: {
            table: 'ecom-options',
        },
        physicalVariant: {
            table: 'ecom-physical-variants',
        },
        physicalSupport: {
            table: 'ecom-physical-supports',
        },
        product: {
            table: 'ecom-product',
        },
        pricing: {
            table: 'ecom-stock',
        },
        stock: {
            table: 'ecom-stock',
        },
        variant: {
            table: 'ecom-variant',
        },
        recommendations: {
            table: 'ecom-recommendations',
        },
        upsell: {
            table: 'ecom-upsell',
        },
        fastorder: {
            table: 'ecom-fastorder',
        },
    },

    auth: {
        username: {
            doc: 'The basic auth username',
            format: String,
            default: 'rc',
            env: 'AUTH_USERNAME',
            arg: 'username',
        },
        pass: {
            doc: 'The basic auth password',
            format: String,
            default: 'changeMe',
            env: 'AUTH_PASS',
            arg: 'pass',
        },
    },

    logging: {
        runtime: {
            doc: 'The main runtime logger',
            format: String,
            default: 'ecom-pricing-api',
            env: 'LOGGER_RUNTIME_NAME',
        },
        init: {
            doc: 'The init time logger',
            format: String,
            default: 'ecom-pricing-api-init',
            env: 'LOGGER_INIT_NAME',
        },
        level: {
            doc: 'The level of logging that is emitted by this application instance',
            format: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
            default: 'info',
            env: 'LOGGER_LEVEL',
        },
    },

    babelService: {
        url: {
            doc: 'The URL of the babel service',
            format: String,
            default: 'https://api.babeltest.photobox.com',
            env: 'BABEL_SERVICE_URL',
        },
        clientId: {
            doc: 'The babel client id',
            format: String,
            default: 'ecom-orchestration-api:pricing-development',
            env: 'BABEL_SERVICE_CLIENT_ID',
        },
        fetch: {
            retries: {
                doc: 'Default number of retries',
                format: Number,
                default: 3,
                env: 'BABEL_SERVICE_RETRIES',
                arg: 'babel-service-retries',
            },
            timeout: {
                doc: 'Maximum request timeout',
                format: Number,
                default: 20000,
                env: 'BABEL_SERVICE_TIMEOUT',
            },
            keepAliveEnabled: {
                doc: 'Whether Keep-Alive is enabled',
                format: Boolean,
                default: false,
                env: 'BABEL_SERVICE_KEEP_ALIVE_ENABLED',
            },
            keepAlive: {
                keepAliveMsecs: {
                    doc: 'Initial delay for TCP Keep-Alive packets',
                    format: Number,
                    default: 1000,
                    env: 'BABEL_SERVICE_KEEP_ALIVE_MSECS',
                },
                maxSockets: {
                    doc: 'Max no. of sockets to allow per host',
                    format: Number,
                    default: Infinity,
                    env: 'BABEL_SERVICE_KEEP_ALIVE_MAX_SOCKETS',
                },
                maxFreeSockets: {
                    doc: 'Max no. of sockets to leave open in a free state',
                    format: Number,
                    default: 256,
                    env: 'BABEL_SERVICE_KEEP_ALIVE_MAX_FREE_SOCKETS',
                },
            },
        },
    },
});

// Load environment dependent configuration
const env = config.get('env');

config.loadFile(__dirname + '../config/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
