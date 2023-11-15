import getDiffFlatFiles from '../src/get-diff-flat-files.js';
import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';

const resultExpected1 = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

test('test JSON files diff', () => {
  expect(getDiffFlatFiles(getAbsFixturePath('file1.json'), getAbsFixturePath('file2.json'))).toEqual(resultExpected1);
});

test('test yaml files diff', () => {
  expect(getDiffFlatFiles(getAbsFixturePath('file1.yaml'), getAbsFixturePath('file2.yaml'))).toEqual(resultExpected1);
});

test('test yml files diff', () => {
  expect(getDiffFlatFiles(getAbsFixturePath('file1.yml'), getAbsFixturePath('file2.yml'))).toEqual(resultExpected1);
});
