const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('@babel/core'); // Updated package name

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['@babel/preset-env'] // Updated preset name
  }
);

const src = babelResult.code

jsdom({
  html, src
});
