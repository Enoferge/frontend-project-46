import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';
import { FORMATTERS } from '../src/constants.js';
import getDiffFiles from '../src/get-diff-files.js';
import parser from '../src/parser.js';

test('test deep JSON files diff with format json', () => {
  const expectedJson = parser(getAbsFixturePath('result-expected.json'));

  expect(getDiffFiles(getAbsFixturePath('file-deep1.json'), getAbsFixturePath('file-deep2.json'), FORMATTERS.JSON))
    .toEqual(expectedJson);
});
