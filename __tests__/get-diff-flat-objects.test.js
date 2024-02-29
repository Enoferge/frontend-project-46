import getDiffFlatObjects from '../src/get-diff-flat-objects.js';

const object1 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const object2 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const resultExpected1 = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

const object3 = {};

const object4 = {
  host: 'hexlet.io',
  timeout: 50,
  follow: false,
};

const resultExpected2 = `{
 - follow: false
 - host: hexlet.io
 - timeout: 50
}`;

test('get diff default objects', () => {
  expect(getDiffFlatObjects(object1, object2)).toEqual(resultExpected1);
});

test('get diff objects, first is empty', () => {
  expect(getDiffFlatObjects(object3, object4)).toEqual(resultExpected2);
});