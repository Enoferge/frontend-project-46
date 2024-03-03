import { ACTIONS, getActionSymbol } from '../constants.js';

export default (diffObject) => {
  const indent = ' '.repeat(4);

  const iter = (diff, deep) => diff.reduce((acc, {
    key, action, value, oldValue,
  }) => {
    const indentsAfter = indent.repeat(deep);

    const getLine = (v, a) => {
      const preparedValue = Array.isArray(v)
        ? `{\n${iter(v, deep + 1)}${indentsAfter}}\n`
        : `${v}\n`;

      const indentsBefore = `${indentsAfter.slice(0, -2)}${getActionSymbol(a)} `;

      return `${indentsBefore}${key}: ${preparedValue}`;
    };

    if (action === ACTIONS.UPDATED) {
      return acc.concat(getLine(oldValue, ACTIONS.REMOVED), getLine(value, ACTIONS.ADDED));
    }
    return acc.concat(getLine(value, action));
  }, '');

  return `{\n${iter(diffObject, 1)}}`;
};
