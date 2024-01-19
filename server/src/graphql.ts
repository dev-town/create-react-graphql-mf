import { gql } from 'graphql-tag';

/**
 * Schemas that are not part of this repo, but need to be there for codegen
 * Only use the minimal amount of schemas possible / needed for this repo to work
 */
export const typeDefs = gql`
    enum ServiceName {
        Example
    }
`;
