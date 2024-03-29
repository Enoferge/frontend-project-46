import getDiff from '../src/index.js';
import getAbsFixturePath from '../helpers/get-abs-fixture-path.js';

const resultExpected = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('deep JSON files diff', () => {
  expect(getDiff(getAbsFixturePath('file-deep1.json'), getAbsFixturePath('file-deep2.json')))
    .toEqual(resultExpected);
});

test('deep YAML files diff', () => {
  expect(getDiff(getAbsFixturePath('file-deep1.yaml'), getAbsFixturePath('file-deep2.yaml')))
    .toEqual(resultExpected);
});
