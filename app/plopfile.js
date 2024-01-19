module.exports = function (plop) {
    const graphQlTemplates = [
        {
            path: '/graphql/queries/example.graphql',
            templateFile: '.plop/graphql/query.template.graphql.hbs',
        },
        {
            path: '/graphql/fragments/example.graphql',
            templateFile: '.plop/graphql/fragment.template.graphql.hbs',
        },
        {
            path: '/graphql/mutations/example.graphql',
            templateFile: '.plop/graphql/mutation.template.graphql.hbs',
        },
    ];

    const componentTemplates = [
        {
            path: 'src/components/{{pascalCase componentName}}/index.ts',
            templateFile: '.plop/components/index.template.ts.hbs',
        },
        {
            path: 'src/components/{{pascalCase componentName}}/__stories__/{{pascalCase componentName}}.stories.tsx',
            templateFile: '.plop/components/story.template.tsx.hbs',  
        },
        {
            path: 'src/components/{{pascalCase componentName}}/components/{{pascalCase componentName}}.styled.tsx',
            templateFile: '.plop/components/style.template.tsx.hbs',
        },
        {
            path: 'src/components/{{pascalCase componentName}}/components/{{pascalCase componentName}}.tsx',
            templateFile: '.plop/components/component.template.tsx.hbs',
        },
        {
            path: 'src/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.test.tsx',
            templateFile: '.plop/components/test.template.tsx.hbs',
        },
    ];

    const exposeActions = [
        {
            type: 'modify',
            path: 'src/index.ts',
            pattern: /(\/\/ CODE_GEN_COMPONENTS)/g,
            template: `export * from './components/{{pascalCase componentName}}';\n$i`,
        }
    ];

    /* Questions */

    const getComponentName = {
        type: 'input',
        name: 'componentName',
        message: 'Name this component',
        validate: (value) => {
            if (/.+/.test(value)) {
                return true;
            }
            return 'A name is required';
        },
    };

    const isGraphql = {
        type: 'confirm',
        name: 'isGraphQL',
        message: 'Do you need GraphQL?',
    };

    const isExposed = {
        type: 'confirm',
        name: 'isExposed',
        message: 'Do you want this component exported?',
    };

    

    plop.setGenerator('Component', {
        description: 'Component',
        prompts: [getComponentName, isGraphql, isExposed],
        actions: (data) => {
            let actions = componentTemplates.map((item) => ({ ...item, type: 'add' }));

            if (data.isGraphQL) {
                actions = [
                    ...actions,
                    ...graphQlTemplates.map((item) => ({
                        type: 'add',
                        path: `src/components/{{pascalCase componentName}}/${item.path}`,
                        templateFile: item.templateFile,
                    })),
                ];
            }

            if (data.isExposed) {
                actions = [...actions, ...exposeActions];
            }

            return actions;
        },
    });

};
