import getDiffFiles from '../src/get-diff-files.js';
import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';

const resultExpected = `{
  + follow: false
    host: hexlet.io
  + proxy: 123.234.53.22
  - timeout: 20
  + timeout: 50
  - verbose: true
}`;

test('test JSON files diff', () => {
  expect(getDiffFiles(getAbsFixturePath('file1.json'), getAbsFixturePath('file2.json')), 'stylish').toEqual(resultExpected);
});

test('test yaml files diff', () => {
  expect(getDiffFiles(getAbsFixturePath('file1.yaml'), getAbsFixturePath('file2.yaml')), 'stylish').toEqual(resultExpected);
});

test('test yml files diff', () => {
  expect(getDiffFiles(getAbsFixturePath('file1.yml'), getAbsFixturePath('file2.yml')), 'stylish').toEqual(resultExpected);
});
