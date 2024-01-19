import { gql } from 'graphql-tag';
import { IResolvers } from '../../types/graphql-generated';
import { repo } from './repo';

export const typeDefs = gql`
    type Example @key(fields: "id") {
        id: ID!
        title: String!
        content: String!
    }

    input ExampleInput {
        title: String!
        content: String!
    }

    extend type Query {
        examples: [Example!]!
    }

    #  This is an example of extending User and adding a field of myExamples to it
    # extend type User @key(fields: "id") {
    #     id: ID! @external
    #     myExamples: [Example!]!
    # }

    extend type Mutation {
        createExample(input: ExampleInput!): Example!
    }
`;

export const resolvers: IResolvers = {
    Query: {
        examples: () => repo.getExamples(),
    },
    // Example resolver for the myExamples field inside User
    // User: {
    //     myExamples: () => repo.getExamples(),
    // },
    Mutation: {
        createExample: (_, { input }) => repo.createExample(input),
    },
    Example: {
        __resolveReference(example) {
            return repo.getExampleById(example.id);
        },
    },
};
