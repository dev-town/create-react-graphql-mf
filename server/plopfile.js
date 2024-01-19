module.exports = function (plop) {
    const moduleTemplates = [
        {
            type: 'add',
            path: 'src/modules/{{pascalCase moduleName}}/graphql.ts',
            templateFile: '.plop/modules/graphql.template.ts.hbs',
        },
        {
            type: 'add',
            path: 'src/modules/{{pascalCase moduleName}}/repo.ts',
            templateFile: '.plop/modules/repo.template.ts.hbs',
        },
    ];

    
    const modelTemplates = [
        {
            type: 'add',
            path: 'src/modules/{{pascalCase moduleName}}/graphql.ts',
            templateFile: '.plop/modules/graphql-model.template.ts.hbs',
        },
        {
            type: 'add',
            path: 'src/modules/{{pascalCase moduleName}}/repo.ts',
            templateFile: '.plop/modules/repo-model.template.ts.hbs',
        },

        // Add the model file
        {
            type: 'add',
            path: 'src/models/{{pascalCase moduleName}}.ts',
            templateFile: '.plop/models/model.template.ts.hbs',
        },
        {
            type: 'modify',
            path: 'codegen.yml',
            pattern: /(\# CODE_GEN_MODELS)/g,
            template: '                {{pascalCase moduleName}}: ../models/{{pascalCase moduleName}}#{{pascalCase moduleName}}\n$1',
        }
    ];


    const generalTemplates = [
        {
            type: 'add',
            path: 'src/modules/{{pascalCase moduleName}}/index.ts',
            templateFile: '.plop/modules/index.template.ts.hbs',
        },
        {
            type: 'modify',
            path: 'src/modules/index.ts',
            pattern: /(\/\/ CODE_GEN_IMPORTS)/g,
            template: 'import * as {{pascalCase moduleName}} from \'./{{pascalCase moduleName}}\'; \n$1',
        },
        {
            type: 'modify',
            path: 'src/modules/index.ts',
            pattern: /(\/\/ CODE_GEN_MODULES)/g,
            template: '    {{pascalCase moduleName}},\n$1',
        }
    ];

    

    /* Questions */

    const getModuleName = {
        type: 'input',
        name: 'moduleName',
        message: 'Name this module',
        validate: (value) => {
            if (/.+/.test(value)) {
                return true;
            }
            return 'A name is required';
        },
    };
    
    const generateModule = {
        type: 'confirm',
        name: 'generateModule',
        message: 'Do you want a model generated?',
        default: false,
    };


    /* Options */

    plop.setGenerator('Module', {
        description: 'Module',
        prompts: [getModuleName, generateModule],
        actions: (data) => {
            let templates = [...generalTemplates];
            if (data.generateModule) {
                templates = [...templates, ...modelTemplates];
            } else {
                templates = [...templates, ...moduleTemplates];
            }
            return templates;
        },
    });

};
