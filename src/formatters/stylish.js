import { ACTIONS, getActionSymbol } from '../constants.js';

export default (diffObject) => {
  const indent = ' '.repeat(4);

  const iter = (diff, deep) => diff.reduce((acc, {
    key, action, value, oldValue,
  }) => {
    let res = acc;
    const indentsAfter = indent.repeat(deep);

    const getLine = (v, a) => {
      const preparedValue = Array.isArray(v)
        ? `{\n${iter(v, deep + 1)}${indentsAfter}}\n`
        : `${v}\n`;

      const indentsBefore = `${indentsAfter.slice(0, -2)}${getActionSymbol(a)} `;

      return `${indentsBefore}${key}: ${preparedValue}`;
    };

    if (action === ACTIONS.UPDATED) {
      res += getLine(oldValue, ACTIONS.REMOVED);
      res += getLine(value, ACTIONS.ADDED);
    } else {
      res += getLine(value, action);
    }

    return res;
  }, '');

  return `{\n${iter(diffObject, 1)}}`;
};
