export const ACTIONS = {
  ADDED: 'ADDED',
  REMOVED: 'REMOVED',
  UPDATED: 'UPDATED',
  UNCHANCHED: 'UNCHANGED',
};

export const FORMATTERS = {
  STYLISH: 'stylish',
  PLAIN: 'plain',
};

export const getActionSymbol = (action) => {
  switch (action) {
    case ACTIONS.ADDED:
      return '+';
    case ACTIONS.REMOVED:
      return '-';
    case ACTIONS.UNCHANCHED:
      return ' ';
    default:
      throw Error('Invalid action!');
  }
};
