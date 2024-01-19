/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
import { MyExampleFragmentDoc } from '../fragments/example.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IMyExampleMutationMutationVariables = Types.Exact<{
  input: Types.IExampleInput;
}>;


export type IMyExampleMutationMutation = { __typename?: 'Mutation', createExample: { __typename?: 'Example', id: string, title: string, content: string } };


export const MyExampleMutationDocument = gql`
    mutation myExampleMutation($input: ExampleInput!) {
  createExample(input: $input) {
    ...MyExample
  }
}
    ${MyExampleFragmentDoc}`;
export type IMyExampleMutationMutationFn = Apollo.MutationFunction<IMyExampleMutationMutation, IMyExampleMutationMutationVariables>;

/**
 * __useMyExampleMutationMutation__
 *
 * To run a mutation, you first call `useMyExampleMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyExampleMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myExampleMutationMutation, { data, loading, error }] = useMyExampleMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMyExampleMutationMutation(baseOptions?: Apollo.MutationHookOptions<IMyExampleMutationMutation, IMyExampleMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IMyExampleMutationMutation, IMyExampleMutationMutationVariables>(MyExampleMutationDocument, options);
      }
export type MyExampleMutationMutationHookResult = ReturnType<typeof useMyExampleMutationMutation>;
export type MyExampleMutationMutationResult = Apollo.MutationResult<IMyExampleMutationMutation>;
export type MyExampleMutationMutationOptions = Apollo.BaseMutationOptions<IMyExampleMutationMutation, IMyExampleMutationMutationVariables>;