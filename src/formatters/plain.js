import { ACTIONS } from '../constants.js';

const getLine = (action, value, oldValue) => {
  const getValueWord = (v) => {
    if (Array.isArray(v)) {
      return '[complex value]';
    }
    return typeof v === 'string'
      ? `'${v}'`
      : v;
  };

  switch (action) {
    case ACTIONS.ADDED:
      return `added with value: ${getValueWord(value)}`;
    case ACTIONS.REMOVED:
      return 'removed';
    case ACTIONS.UPDATED:
      return `updated. From ${getValueWord(oldValue)} to ${getValueWord(value)}`;
    default:
      throw new Error('Invalid action!');
  }
};

export default (diffObject) => {
  const iter = (diff, path) => diff.reduce((acc, {
    key, action, value, oldValue,
  }) => {
    const currentPath = [...path, key];
    let res = acc;

    if (Array.isArray(value) && action === ACTIONS.UNCHANCHED) {
      res += iter(value, currentPath);
    } else if (action !== ACTIONS.UNCHANCHED) {
      res += `Property '${currentPath.join('.')}' was ${getLine(action, value, oldValue)}\n`;
    }

    return res;
  }, '');

  return iter(diffObject, []);
};
