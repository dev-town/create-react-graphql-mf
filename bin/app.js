const { execSync } = require('child_process');
const path = require('path');

const buildApp = (projectPath, hasServer) => {
    if (hasServer) {
        process.chdir(path.join(projectPath, 'app'));
    } else {
        process.chdir(projectPath);
    }
    execSync('npm install');
    console.log('Install complete');
};

module.exports = {
    buildApp,
};
