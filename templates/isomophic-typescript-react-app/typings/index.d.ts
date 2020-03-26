declare module 'redux-saga-requests-graphql' {
    export interface GraphqlDriverConfig {
        url: string
    }
    export const createDriver: (config: GraphqlDriverConfig) => Driver
    export const gql: (query: { [n: number]: string }) => string
}

/** 
declare module 'redux' {
    interface Store<S = any, A extends Action<any> = AnyAction> {
        
    }
}
**/
