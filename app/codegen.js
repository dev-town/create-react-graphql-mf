module.exports = {
    schema: `http://localhost:4100`,
    documents: 'src/**/*.graphql',
    overwrite: true,
    generates: {
        './src/graphql/introspection.json': {
            plugins: ['introspection'],
        },
        './src/graphql/fragments.json': {
            plugins: ['fragment-matcher'],
            config: {
                apolloClientVersion: 3,
            },
        },
        './src/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
            config: {
                wrapFieldDefinitions: true,
                typesPrefix: 'I',
                exportFragmentSpreadSubTypes: true,
                preResolveTypes: true,
                avoidOptionals: false,
            },
        },
        './src': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.tsx',
                baseTypesPath: 'graphql/generated.ts',
            },
            plugins: [
                {
                    add: {
                        content: '/* eslint-disable @typescript-eslint/no-unused-vars */',
                    },
                },
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                wrapFieldDefinitions: true,
                typesPrefix: 'I',
                exportFragmentSpreadSubTypes: true,
                preResolveTypes: true,
                avoidOptionals: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
    },
};
