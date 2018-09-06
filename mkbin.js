const semver = require('semver');
const fs = require('fs');

const pjson = require('./package.json');

const version = pjson.dependencies.typescript;
const major = semver.major(version);
const minor = semver.minor(version);

const tsc = 'node_modules/typescript/bin/tsc';

const newBin = {
  [`tsc-${version}`]: tsc,
  [`tsc-${major}.${minor}`]: tsc,
  [`tsc-${major}`]: tsc
};

pjson.bin = newBin;
pjson.bundledDependencies = ['typescript'];

fs.writeFileSync('./package.json', JSON.stringify(pjson, null, 2));
