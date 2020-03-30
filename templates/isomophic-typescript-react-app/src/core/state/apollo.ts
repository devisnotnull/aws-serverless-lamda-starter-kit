import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            console.error(
                `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
        }
    }
    if (networkError) {
        console.error(`[Network error]: Operation: ${operation}, ${networkError}`);
    }
});

const createLink = (fetch, uri: string, usePersistedQueries: boolean): ApolloLink =>
    ApolloLink.from([
        ...(usePersistedQueries
            ? [
                  createPersistedQueryLink({
                      useGETForHashedQueries: usePersistedQueries,
                  }),
              ]
            : []),
        errorLink,
        createHttpLink({ uri, fetch }),
    ]);

export const initializeApolloClient = (
    fetch: any,
    uri = '',
    ssr = false,
    usePersistedQueries = false
): ApolloClient<NormalizedCacheObject> => {
    const link: ApolloLink = createLink(fetch, uri, usePersistedQueries);
    return new ApolloClient({
        cache: new InMemoryCache(),
        link,
        ssrMode: ssr,
    });
};
