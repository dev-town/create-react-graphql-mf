import { DocumentNode } from 'graphql';

import { IResolvers } from '../types/graphql-generated';
import * as Example from './Example';
import * as Scalars from './Scalars';
// CODE_GEN_IMPORTS

interface ModuleType {
    typeDefs: DocumentNode
    resolvers: IResolvers;
}
export const modules: ModuleType[] = [
    Scalars,
    Example,
// CODE_GEN_MODULES
];