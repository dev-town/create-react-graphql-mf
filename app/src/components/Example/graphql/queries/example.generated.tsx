/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
import { MyExampleFragmentDoc } from '../fragments/example.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IMyExampleQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IMyExampleQueryQuery = { __typename?: 'Query', examples: Array<{ __typename?: 'Example', id: string, title: string, content: string }> };


export const MyExampleQueryDocument = gql`
    query myExampleQuery {
  examples {
    ...MyExample
  }
}
    ${MyExampleFragmentDoc}`;

/**
 * __useMyExampleQueryQuery__
 *
 * To run a query within a React component, call `useMyExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyExampleQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyExampleQueryQuery(baseOptions?: Apollo.QueryHookOptions<IMyExampleQueryQuery, IMyExampleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMyExampleQueryQuery, IMyExampleQueryQueryVariables>(MyExampleQueryDocument, options);
      }
export function useMyExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMyExampleQueryQuery, IMyExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMyExampleQueryQuery, IMyExampleQueryQueryVariables>(MyExampleQueryDocument, options);
        }
export type MyExampleQueryQueryHookResult = ReturnType<typeof useMyExampleQueryQuery>;
export type MyExampleQueryLazyQueryHookResult = ReturnType<typeof useMyExampleQueryLazyQuery>;
export type MyExampleQueryQueryResult = Apollo.QueryResult<IMyExampleQueryQuery, IMyExampleQueryQueryVariables>;