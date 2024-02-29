import getDiffSimpleValue from './get-diff-simple-value.js';

export default (deepData1, deepData2) => {
  const isValueObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

  const iter = (data1, data2) => {
    const data2Copy = { ...data2 };

    const list = Object.entries(data1).flatMap(([key, value]) => {
      const value2 = data2Copy[key];

      if (!Object.hasOwn(data2Copy, key)) {
        return {
          key,
          value,
          sign: false,
        };
      }

      delete data2Copy[key];

      if (isValueObject(value) && isValueObject(value2)) {
        return { key, value: iter(value, value2), sign: undefined };
      }

      return getDiffSimpleValue(value, value2, key);
    });

    const entriesRemained = Object.entries(data2Copy);

    if (entriesRemained.length) {
      entriesRemained.forEach(([key, value]) => {
        list.push({ key, value, sign: true });
      });
    }

    return list;
  };

  return iter(deepData1, deepData2);
};
