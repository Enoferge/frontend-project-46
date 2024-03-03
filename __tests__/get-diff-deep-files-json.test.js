import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';
import { FORMATTERS } from '../src/constants.js';
import getDiff from '../src/index.js';
// import parser from '../src/parser.js';

test('test deep JSON files diff with format json', () => {
  // const expectedJson = parser(getAbsFixturePath('result-expected.json'));
  const result = getDiff(getAbsFixturePath('file-deep1.json'), getAbsFixturePath('file-deep2.json'), FORMATTERS.JSON);

  expect(() => JSON.parse(result)).not.toThrow();
  // expect(result).toEqual(expectedJson);
});
