const fs = require('fs-extra');

fs.removeSync('./build');

fs.copySync('./src/assets', './build/assets');

console.log('done');
