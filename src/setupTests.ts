// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const { JSDOM } = require('jsdom');

const jsdomConfig = {
  url: 'http://localhost:3000',
  pretendToBeVisual: true,
};

const dom = new JSDOM('<!doctype html>', jsdomConfig);

global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;