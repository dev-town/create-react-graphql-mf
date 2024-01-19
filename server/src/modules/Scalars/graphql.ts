import { gql } from 'graphql-tag';

import { DateTimeResolver, DateResolver } from 'graphql-scalars';

export const typeDefs = gql`
    scalar DateTime
    scalar Date
`;

export const resolvers: any = {
    DateTime: DateTimeResolver,
    Date: DateResolver,
}