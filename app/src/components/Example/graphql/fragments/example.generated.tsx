/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
export type IMyExampleFragment = { __typename?: 'Example', id: string, title: string, content: string };

export const MyExampleFragmentDoc = gql`
    fragment MyExample on Example {
  id
  title
  content
}
    `;