import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FieldWrapper<T> = T;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  _Any: any;
  federation__FieldSet: any;
  link__Import: any;
};

export type IExample = {
  __typename?: 'Example';
  content: FieldWrapper<Scalars['String']>;
  id: FieldWrapper<Scalars['ID']>;
  title: FieldWrapper<Scalars['String']>;
};

export type IExampleInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createExample: FieldWrapper<IExample>;
};


export type IMutationCreateExampleArgs = {
  input: IExampleInput;
};

export type IQuery = {
  __typename?: 'Query';
  _entities: Array<Maybe<FieldWrapper<I_Entity>>>;
  _service: FieldWrapper<I_Service>;
  examples: Array<FieldWrapper<IExample>>;
};


export type IQuery_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type I_Entity = IExample;

export type I_Service = {
  __typename?: '_Service';
  sdl?: Maybe<FieldWrapper<Scalars['String']>>;
};

export enum ILink__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Example: ResolverTypeWrapper<IExample>;
  ExampleInput: IExampleInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']>;
  _Entity: IResolversTypes['Example'];
  _Service: ResolverTypeWrapper<I_Service>;
  federation__FieldSet: ResolverTypeWrapper<Scalars['federation__FieldSet']>;
  link__Import: ResolverTypeWrapper<Scalars['link__Import']>;
  link__Purpose: ILink__Purpose;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Example: IExample;
  ExampleInput: IExampleInput;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  _Any: Scalars['_Any'];
  _Entity: IResolversParentTypes['Example'];
  _Service: I_Service;
  federation__FieldSet: Scalars['federation__FieldSet'];
  link__Import: Scalars['link__Import'];
};

export type IExternalDirectiveArgs = {
  reason?: Maybe<Scalars['String']>;
};

export type IExternalDirectiveResolver<Result, Parent, ContextType = any, Args = IExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__ExtendsDirectiveArgs = { };

export type IFederation__ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__InaccessibleDirectiveArgs = { };

export type IFederation__InaccessibleDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__InaccessibleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__OverrideDirectiveArgs = {
  from: Scalars['String'];
};

export type IFederation__OverrideDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__OverrideDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__ProvidesDirectiveArgs = {
  fields: Scalars['federation__FieldSet'];
};

export type IFederation__ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__RequiresDirectiveArgs = {
  fields: Scalars['federation__FieldSet'];
};

export type IFederation__RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IFederation__TagDirectiveArgs = {
  name: Scalars['String'];
};

export type IFederation__TagDirectiveResolver<Result, Parent, ContextType = any, Args = IFederation__TagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IKeyDirectiveArgs = {
  fields: Scalars['federation__FieldSet'];
  resolvable?: Maybe<Scalars['Boolean']>;
};

export type IKeyDirectiveResolver<Result, Parent, ContextType = any, Args = IKeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ILinkDirectiveArgs = {
  as?: Maybe<Scalars['String']>;
  for?: Maybe<ILink__Purpose>;
  import?: Maybe<Array<Maybe<Scalars['link__Import']>>>;
  url?: Maybe<Scalars['String']>;
};

export type ILinkDirectiveResolver<Result, Parent, ContextType = any, Args = ILinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IShareableDirectiveArgs = { };

export type IShareableDirectiveResolver<Result, Parent, ContextType = any, Args = IShareableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date';
}

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IExampleResolvers<ContextType = any, ParentType extends IResolversParentTypes['Example'] = IResolversParentTypes['Example']> = {
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createExample?: Resolver<IResolversTypes['Example'], ParentType, ContextType, RequireFields<IMutationCreateExampleArgs, 'input'>>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  _entities?: Resolver<Array<Maybe<IResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<IQuery_EntitiesArgs, 'representations'>>;
  _service?: Resolver<IResolversTypes['_Service'], ParentType, ContextType>;
  examples?: Resolver<Array<IResolversTypes['Example']>, ParentType, ContextType>;
};

export interface I_AnyScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['_Any'], any> {
  name: '_Any';
}

export type I_EntityResolvers<ContextType = any, ParentType extends IResolversParentTypes['_Entity'] = IResolversParentTypes['_Entity']> = {
  __resolveType: TypeResolveFn<'Example', ParentType, ContextType>;
};

export type I_ServiceResolvers<ContextType = any, ParentType extends IResolversParentTypes['_Service'] = IResolversParentTypes['_Service']> = {
  sdl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IFederation__FieldSetScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['federation__FieldSet'], any> {
  name: 'federation__FieldSet';
}

export interface ILink__ImportScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['link__Import'], any> {
  name: 'link__Import';
}

export type IResolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Example?: IExampleResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _Entity?: I_EntityResolvers<ContextType>;
  _Service?: I_ServiceResolvers<ContextType>;
  federation__FieldSet?: GraphQLScalarType;
  link__Import?: GraphQLScalarType;
};

export type IDirectiveResolvers<ContextType = any> = {
  external?: IExternalDirectiveResolver<any, any, ContextType>;
  federation__extends?: IFederation__ExtendsDirectiveResolver<any, any, ContextType>;
  federation__inaccessible?: IFederation__InaccessibleDirectiveResolver<any, any, ContextType>;
  federation__override?: IFederation__OverrideDirectiveResolver<any, any, ContextType>;
  federation__provides?: IFederation__ProvidesDirectiveResolver<any, any, ContextType>;
  federation__requires?: IFederation__RequiresDirectiveResolver<any, any, ContextType>;
  federation__tag?: IFederation__TagDirectiveResolver<any, any, ContextType>;
  key?: IKeyDirectiveResolver<any, any, ContextType>;
  link?: ILinkDirectiveResolver<any, any, ContextType>;
  shareable?: IShareableDirectiveResolver<any, any, ContextType>;
};
