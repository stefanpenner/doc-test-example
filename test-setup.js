
const { getCode, parseFile } = require('doc-tester/lib/util');
const { codeArray, importsArray } = parseFile('./README.md');
const fs = require('fs-extra');
const execa = require('execa');
const path = require('path');

// setup a test environment to mimic
fs.removeSync('tmp');
fs.mkdirSync('tmp');
fs.mkdirSync('tmp/node_modules');
fs.symlinkSync(__dirname, path.resolve('tmp/node_modules/doc-tester-example/'));

fs.writeFileSync(__dirname + '/tmp/code.js', getCode(codeArray, importsArray, 'foo'));
