import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Example } from '../models/Example';
import { Testing } from '../models/Testing';
import { Andy2 } from '../models/Andy2';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type FieldWrapper<T> = T;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  _FieldSet: { input: any; output: any; }
};

export type IAndy = {
  id: FieldWrapper<Scalars['ID']['output']>;
  value: FieldWrapper<Scalars['String']['output']>;
};

export type IAndy2 = {
  id: FieldWrapper<Scalars['ID']['output']>;
  value: FieldWrapper<Scalars['String']['output']>;
};

export type IAndy2Input = {
  value: Scalars['String']['input'];
};

export type IAndyInput = {
  value: Scalars['String']['input'];
};

export type IExample = {
  content: FieldWrapper<Scalars['String']['output']>;
  id: FieldWrapper<Scalars['ID']['output']>;
  title: FieldWrapper<Scalars['String']['output']>;
};

export type IExampleInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type IMutation = {
  createAndy: FieldWrapper<IAndy>;
  createAndy2: FieldWrapper<IAndy2>;
  createExample: FieldWrapper<IExample>;
};


export type IMutationCreateAndyArgs = {
  input: IAndyInput;
};


export type IMutationCreateAndy2Args = {
  input: IAndy2Input;
};


export type IMutationCreateExampleArgs = {
  input: IExampleInput;
};

export type IQuery = {
  examples: Array<FieldWrapper<IExample>>;
  getAndy: Array<FieldWrapper<IAndy>>;
  getAndy2: Array<FieldWrapper<IAndy2>>;
};

export enum IServiceName {
  Example = 'Example'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type UnwrappedObject<T> = {
        [P in keyof T]: T[P] extends infer R | Promise<infer R> | (() => infer R2 | Promise<infer R2>)
          ? R & R2 : T[P]
      };
export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Andy: ResolverTypeWrapper<IAndy>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Andy2: ResolverTypeWrapper<Andy2>;
  Andy2Input: IAndy2Input;
  AndyInput: IAndyInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Example: ResolverTypeWrapper<Example>;
  ExampleInput: IExampleInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ServiceName: IServiceName;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Andy: IAndy;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  Andy2: Andy2;
  Andy2Input: IAndy2Input;
  AndyInput: IAndyInput;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Example: Example;
  ExampleInput: IExampleInput;
  Mutation: {};
  Query: {};
  Boolean: Scalars['Boolean']['output'];
};

export type IAndyResolvers<ContextType = any, ParentType extends IResolversParentTypes['Andy'] = IResolversParentTypes['Andy']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAndy2Resolvers<ContextType = any, ParentType extends IResolversParentTypes['Andy2'] = IResolversParentTypes['Andy2']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date';
}

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IExampleResolvers<ContextType = any, ParentType extends IResolversParentTypes['Example'] = IResolversParentTypes['Example']> = {
  __resolveReference?: ReferenceResolver<Maybe<IResolversTypes['Example']>, { __typename: 'Example' } & GraphQLRecursivePick<UnwrappedObject<ParentType>, {"id":true}>, ContextType>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createAndy?: Resolver<IResolversTypes['Andy'], ParentType, ContextType, RequireFields<IMutationCreateAndyArgs, 'input'>>;
  createAndy2?: Resolver<IResolversTypes['Andy2'], ParentType, ContextType, RequireFields<IMutationCreateAndy2Args, 'input'>>;
  createExample?: Resolver<IResolversTypes['Example'], ParentType, ContextType, RequireFields<IMutationCreateExampleArgs, 'input'>>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  examples?: Resolver<Array<IResolversTypes['Example']>, ParentType, ContextType>;
  getAndy?: Resolver<Array<IResolversTypes['Andy']>, ParentType, ContextType>;
  getAndy2?: Resolver<Array<IResolversTypes['Andy2']>, ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Andy?: IAndyResolvers<ContextType>;
  Andy2?: IAndy2Resolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Example?: IExampleResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
};

