import { gql } from 'graphql-tag';
import { merge } from 'lodash';
import { config as dotenvConfig } from 'dotenv';
import { modules } from './modules';

dotenvConfig();

export const PORT = Number(process.env.GRAPHQL_PORT || 4101);

// If there are no mutations, the Type Mutation shoud be removed here
const typeDef = gql`
    extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable", "@external"])

    type Query
    type Mutation
`;

// If we are running this standalone, (for testing in storybook)
// Then we add additional resolvers to fill missing bits of data
const isStandalone = false;

export const config = modules.reduce(
    (acc, item) => ({
        ...acc,
        typeDefs: [...acc.typeDefs, item.typeDefs],
        resolvers: merge(acc.resolvers, item.resolvers),
    }),
    {
        typeDefs: [typeDef],
        resolvers: {},
        subscriptions: {},
        tracing: true,
    },
);
