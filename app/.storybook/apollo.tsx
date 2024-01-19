import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
    ApolloProvider,
    NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { typePolicies } from '../src/graphQlTypePolicies';

import fragments from '../src/graphql/fragments.json';

export const getClient = async () => {
    // Get the API URL from the env vars
    const API = `http://localhost:4100`;

    // Define the GraphQL API endpoint
    const httpLink = new HttpLink({ uri: API });

    // Handle errors
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
            );
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    /* Create Apollo Link array to pass to Apollo Client */
    const link = ApolloLink.from([errorLink, httpLink]);

    // Define the in memory cache
    const cache = new InMemoryCache({
        ...fragments,
        typePolicies: {
            ...typePolicies,
        },
    });

    // Setup apollo client with the link and cache
    const client = new ApolloClient({
        link,
        cache,
    });

    return client;
};

export const Provider: React.FC<{ children: React.ReactElement}> = ({ children }) => {
    const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject> | null>();

    React.useEffect(() => {
        getClient().then((res) => {
            setClient(res);
        });
    }, []);

    if (!client) return null;

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
