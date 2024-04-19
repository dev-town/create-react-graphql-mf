const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const kebabCase = require('kebab-case');

const gitRepo = 'https://github.com/dev-town/create-react-graphql-mf.git';

const updatePackageJsonName = (packageName, file) => {
    let content = fs.readFileSync(file);
    let contentJson = JSON.parse(content);
    contentJson.name = packageName;
    contentJson.version = 'v0.1.0';
    const output = JSON.stringify(contentJson, null, 4);
    fs.writeFileSync(file, output);
};

const cloneRepo = async (projectPath, projectName, hasServer, port) => {
    console.log('Clone repo');
    execSync(`git clone ${gitRepo} ${projectPath}`);
    process.chdir(projectPath);

    updatePackageJsonName(kebabCase(projectName), path.join(projectPath, 'app', 'package.json'));
    updatePackageJsonName(kebabCase(`${projectName}-server`), path.join(projectPath, 'server', 'package.json'));

    if (hasServer) {
        console.log('Generate env');
        const envOutput = `GRAPHQL_PORT=${port}`;
        const data = `${envOutput}`;

        fs.writeFileSync(path.join(projectPath, 'app', '.env'), data);
        fs.writeFileSync(path.join(projectPath, 'server', '.env'), data);
    } else {
        fs.removeSync(path.join(projectPath, 'server'));
        fs.copySync(path.join(projectPath, 'app'), projectPath);
        fs.removeSync(path.join(projectPath, 'app'));

        // Change the name of the prepare script
        await standaloneAppHusky(projectPath);
    }
};

const buildGitRepo = async (projectPath, hasServer) => {
    console.log('Create new git repo');
    process.chdir(projectPath);
    fs.removeSync('./.git');

    execSync('git init');
    execSync('git add -A');
    execSync('git commit -m"Initial Commit"');
    if (hasServer) {
        execSync('git config core.hooksPath "app/.husky"');
    } else {
        execSync('git config core.hooksPath ".husky"');
    }
};

const standaloneAppHusky = async (appPath) => {
    const packageJsonFile = path.join(appPath, 'package.json');

    let content = fs.readFileSync(packageJsonFile);
    let contentJson = JSON.parse(content);
    contentJson.scripts['prepare'] = 'husky install .husky';
    const output = JSON.stringify(contentJson, null, 4);
    fs.writeFileSync(packageJsonFile, output);

    // Update pre commit
    const preCommitFile = path.join(appPath, '.husky', 'pre-commit');
    fs.writeFileSync(
        preCommitFile,
        `
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lang
npm run check-types
npm test
npm run prettier    
`,
    );
};

module.exports = {
    cloneRepo,
    buildGitRepo,
};
