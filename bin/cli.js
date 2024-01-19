#! /usr/bin/env node

'use strict';

const path = require('path');
const prompts = require('prompts');

const { makeFolder } = require('./generic');
const { cloneRepo, buildGitRepo } = require('./git');
const { buildApp } = require('./app');
const { buildServer } = require('./server');

if (process.argv.length < 3) {
    console.log('You have to provide a name for the app');
    console.log('e.g.');
    console.log('npx @dev-town/create-react-graphql-mf my-app');
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);

const needServer = async () => {
    const response = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'Do you want to create a server?',
        initial: true,
    });
    return response.value;
};

const serverPortNumber = async () => {
    const response = await prompts({
        type: 'text',
        name: 'port',
        message: 'What port number is the server run on?',
        initial: '4100',
    });
    return response.port;
};

async function main() {
    try {
        const hasServer = await needServer();
        let port = 4100;

        if (hasServer) {
            port = await serverPortNumber();
        }

        makeFolder(projectPath);
        cloneRepo(projectPath, projectName, hasServer, port);
        buildApp(projectPath, hasServer);
        if (hasServer) {
            buildServer(projectPath, projectPath);
        }

        buildGitRepo(projectPath, hasServer);

        console.log('Install complete');
    } catch (error) {
        console.log('Error installing: ', error);
    }
}

main();
