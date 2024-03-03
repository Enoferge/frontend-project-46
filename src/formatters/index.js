import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

import { FORMATTERS } from '../constants.js';

export default (format) => {
  switch (format) {
    case FORMATTERS.STYLISH:
      return stylish;
    case FORMATTERS.PLAIN:
      return plain;
    case FORMATTERS.JSON:
      return json;
    default:
      throw new Error('Invalid format!');
  }
};
