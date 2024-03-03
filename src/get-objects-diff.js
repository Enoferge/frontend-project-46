import _ from 'lodash';

import { ACTIONS } from './constants.js';

const getSortedFields = (fields) => _.sort(fields, ((a, b) => {
  if (a.key === b.key) {
    return a.action ? 1 : -1;
  }
  return a.key > b.key ? 1 : -1;
}));

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
          action: ACTIONS.REMOVED,
        };
      }

      delete data2Copy[key];

      if (isValueObject(value) && isValueObject(value2)) {
        return { key, value: iter(value, value2), action: ACTIONS.UNCHANCHED };
      }

      if (value2 === value) {
        return { key, value, action: ACTIONS.UNCHANCHED };
      }

      return {
        key,
        action: ACTIONS.UPDATED,
        value: getPreparedValue(value2),
        oldValue: getPreparedValue(value),
      };
    });

    // add fields only second file has
    const entriesRemained = Object.entries(data2Copy);

    if (entriesRemained.length) {
      const remainedFields = entriesRemained.map(([key, value]) => (
        {
          key,
          value: getPreparedValue(value),
          action: ACTIONS.ADDED,
        }
      ));

      return getSortedFields([...list, ...remainedFields]);
    }

    return getSortedFields(list);
  };

  return iter(deepData1, deepData2);
};
