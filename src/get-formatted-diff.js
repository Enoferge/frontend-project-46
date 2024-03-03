import getObjectsDiff from './get-objects-diff.js';
import getFormatter from './formatters/index.js';
import { FORMATTERS } from './constants.js';

export default (data1, data2, format = FORMATTERS.STYLISH) => {
  const diff = getObjectsDiff(data1, data2);
  const formatter = getFormatter(format);

  return formatter(diff);
};
