export default (deepData1, deepData2) => {
  const isValueObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

  const iter = (data1, data2) => {
    const data2Copy = { ...data2 };
    const getPreparedValue = (value) => (isValueObject(value) ? iter(value, value) : value);

    const list = Object.entries(data1).flatMap(([key, value]) => {
      const value2 = data2Copy[key];

      // if second file has no field
      if (!Object.hasOwn(data2Copy, key)) {
        return {
          key,
          value: getPreparedValue(value),
          sign: false,
        };
      }

      delete data2Copy[key];

      if (isValueObject(value) && isValueObject(value2)) {
        return { key, value: iter(value, value2), sign: undefined };
      }

      if (value2 === value) {
        return [{ key, value, sign: undefined }];
      }

      return [
        { key, value: getPreparedValue(value), sign: false },
        { key, value: getPreparedValue(value2), sign: true },
      ];
    });

    // add fields only second file has
    const entriesRemained = Object.entries(data2Copy);

    if (entriesRemained.length) {
      entriesRemained.forEach(([key, value]) => {
        list.push({
          key,
          value: getPreparedValue(value),
          sign: true,
        });
      });
    }

    return list;
  };

  return iter(deepData1, deepData2);
};
