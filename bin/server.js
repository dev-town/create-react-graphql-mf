const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const buildServer = (projectPath) => {
    process.chdir(path.join(projectPath, 'server'));
    execSync('npm install');
    console.log('Install complete');
    process.chdir(projectPath);

    fs.removeSync(path.join(projectPath, 'package.json'));
    fs.removeSync(path.join(projectPath, 'package-lock.json'));
};

module.exports = {
    buildServer,
};
