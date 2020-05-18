/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'redux-saga-requests-graphql' {
    export interface GraphqlDriverConfig {
        url: string;
    }
    export const createDriver: (config: GraphqlDriverConfig) => Driver;
    export const gql: (query: { [n: number]: string }) => string;
}
