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

    if (Array.isArray(value) && action === ACTIONS.UNCHANCHED) {
      return acc.concat(iter(value, currentPath));
    }
    if (action !== ACTIONS.UNCHANCHED) {
      return acc.concat(`Property '${currentPath.join('.')}' was ${getLine(action, value, oldValue)}\n`);
    }

    return acc;
  }, '');

  return iter(diffObject, []).trim();
};
