/* eslint-disable react/jsx-props-no-spreading */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { merge } from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { IMocks, addMocksToSchema } from '@graphql-tools/mock';

import { printSchema, buildClientSchema } from 'graphql/utilities';

import mySchema from '../src/graphql/introspection.json';
import fragments from '../src/graphql/fragments.json';
import { IResolvers } from '../src/graphql/generated';
import { typePolicies } from '../src/graphQlTypePolicies';

export interface ApolloMocks {
    resolvers?: IResolvers;
    mockTypes?: IMocks;
}

// Any default resolvers we want to use here.
// I believe the mock types might be more useful than this.
// These might be better to test for mutations firing.
export const defaultResolvers = {};

// List of prefered resolve resolve types used for replacing auto mocked data
// i.e. When we get a user, instead of random strings, we want to ensure it is always these values
// This can be partials of the object.
const mockTypes = {
    Example: () => ({
        title: 'Example mock title',
        content: 'Example mock content',
    })
};

export const generateApolloClient = (mocks?: ApolloMocks) => {
    const cache = new InMemoryCache({
        ...fragments,
        typePolicies: {
            ...typePolicies,
        },
    });

    // Generate an executable schema, with mock resolvers
    const schema = makeExecutableSchema({
        //@ts-ignore
        typeDefs: printSchema(buildClientSchema(mySchema)),
        resolvers: merge(defaultResolvers, mocks?.resolvers),
    });

    // Mock the schema with auto generated mocks
    // Except anything that is overridden as part of the mock types
    const mockedSchema = addMocksToSchema({
        schema,
        mocks: { ...mockTypes, ...(mocks?.mockTypes ? mocks?.mockTypes : {}) },
        preserveResolvers: true,
    });
    const link = new SchemaLink({ schema: mockedSchema });
    // Create the Apollo client with mock server
    const client = new ApolloClient({
        cache,
        link,
    });

    return client;
};
