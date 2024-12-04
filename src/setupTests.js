// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock require.context for Jest
global.require = {
  context: (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const fs = require('fs');
    const path = require('path');

    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);
          return;
        }

        if (!regularExpression.test(fullPath)) return;

        const relativePath = `./${path.relative(base, fullPath)}`;
        files[relativePath] = fullPath;
      });
    }

    readDirectory(base);

    function Module(file) {
      return require(files[file]);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  },
};