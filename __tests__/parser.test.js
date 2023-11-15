import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';
import parser from '../src/parser.js';

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

test('parse default file1', () => {
  expect(parser(getAbsFixturePath('file1.json'))).toEqual(resultExpected1);
});

test('parse default file2', () => {
  expect(parser(getAbsFixturePath('file2.json'))).toEqual(resultExpected2);
});
