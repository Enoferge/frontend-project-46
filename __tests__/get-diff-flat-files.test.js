import getDiff from '../src/index.js';
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
  expect(getDiff(getAbsFixturePath('file1.json'), getAbsFixturePath('file2.json'))).toEqual(resultExpected);
});

test('test yaml files diff', () => {
  expect(getDiff(getAbsFixturePath('file1.yaml'), getAbsFixturePath('file2.yaml'))).toEqual(resultExpected);
});

test('test yml files diff', () => {
  expect(getDiff(getAbsFixturePath('file1.yml'), getAbsFixturePath('file2.yml'))).toEqual(resultExpected);
});
