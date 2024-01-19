# Welcome to Dev Town's - React GraphQL Typescript Boilerplate App

## Overview

This package serves the purpose of providing a standardized boilerplate for the seamless creation of micro frontends. It caters to teams utilizing libraries such as React, Apollo, and component libraries across their micro frontends. By designating these libraries as peer dependencies, the main application (shell) gains the flexibility to determine the specific versions to be installed and their respective configurations.

### Key Features

-   Documentation and Storybook Integration: Thoroughly document components and seamlessly integrate with Storybook for enhanced development experience.
-   Efficient Codebases: Facilitate the creation of smaller, more manageable codebases.
-   Rapid Development: A straightforward CLI empowers users to swiftly generate new boilerplates, scaffold components, and set up GraphQL schemas.
-   Consistent Standards: Maintain consistency across micro frontends with standardized practices for linting, prettier, codegen, i18n, testing, folder structure, bundling, and more.
-   Familiar Codebase: Enhance developer experience by ensuring a familiar codebase, making it easy to transition between different micro frontends.
-   Automated Hooks: Automatically generate query and mutation hooks, e.g `useGetUsers()` for seamless GraphQL integration.
-   Type Generation: Automatically generate TypeScript typings from GraphQL schemas, streamlining the development process.
-   Federated GraphQL Server: Combine multiple GraphQL APIs into a single, federated graph. Use as is, or hand over the schemas to the BE team.

## To start

Start storybook

```bash
npm start
```

Generate typings from the graphql schema

```bash
npm run codegen
```

## Scaffolding

To speed up creating new components, you can simply run `npm run scaffold`.

```bash
npm run scaffold
```
