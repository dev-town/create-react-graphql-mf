const fs = require('fs-extra');

const makeFolder = (projectPath) => {
    try {
        fs.mkdirSync(projectPath);
    } catch (error) {
        console.log('Error making folder. Is it already created?');
        process.exit(1);
    }
};

module.exports = {
    makeFolder,
};
