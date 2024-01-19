# Welcome to Dev Town's - React GraphQL Typescript Boilerplate Server

Quickest way create a Typescript and referated GraphQL server with codegen built in.

## To start

Run a dev server and listen to file changes.

```bash
npm run dev
```

Generate typings from the graphql schema

```bash
npm run codegen
```

Server the server

```bash
npm start
```

## Scaffolding

To speed up creating new modules, you can simply run `npm run scaffold`.

This will give you options to name you module and optionally create a model.
For more info on models see this [blog post](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen)

```bash
npm run scaffold

? Name this module User
? Do you want a model generated? Yes
✔  ++ /src/modules/User/index.ts
✔  +- /src/modules/index.ts
✔  +- /src/modules/index.ts
✔  ++ /src/modules/User/graphql.ts
✔  ++ /src/modules/User/repo.ts
✔  ++ /src/models/User.ts
✔  +- /codegen.yml

✔ Parse Configuration
✔ Parse Configuration
✔ Generate outputs

```
