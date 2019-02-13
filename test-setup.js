const tmp = require('tmp');

// tmp.setGracefulCleanup();
const { getCode, parseFile } = require('doc-tester/lib/util');
const { codeArray, importsArray } = parseFile('./README.md');
const fs = require('fs-extra');
const path = require('path');

const TMP = `./tmp`;

// setup a test environment to mimic how a user will use our library. We
// essentially put our library on the resolution path, so the tests can
// reference them via public API

fs.removeSync(`${TMP}`);
fs.mkdirSync(`${TMP}`);
// setup a test environment to mimic
fs.mkdirSync(`${TMP}/node_modules/`);
fs.symlinkSync(__dirname, `${TMP}/node_modules/doc-tester-example`);

fs.writeFileSync(`${TMP}/code.js`, getCode(codeArray, importsArray, 'foo'));
