import getDiff from './get-diff.js';
import parser from './parser.js';
import stylish from './stylish.js';

export default (filePath1, filePath2, format) => {
  const data1 = parser(filePath1);
  const data2 = parser(filePath2);
  const diff = getDiff(data1, data2);

  if (format === 'stylish') {
    return stylish(diff)
  }
};
