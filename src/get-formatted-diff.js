import getDiff from './get-diff.js';
import stylish from './stylish.js';

export default (data1, data2, format) => {
  const diff = getDiff(data1, data2);

  if (!format) {
    return stylish(diff);
  }

  return diff;
};
