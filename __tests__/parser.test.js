import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resultExpected1 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const resultExpected2 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const getAbsPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('parse default file1', () => {
  expect(parser(getAbsPath('filepath1.json'))).toEqual(resultExpected1);
});

test('parse default file2', () => {
  expect(parser(getAbsPath('filepath2.json'))).toEqual(resultExpected2);
});
