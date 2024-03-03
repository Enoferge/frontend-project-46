import getFormattedDiff from './get-formatted-diff.js';
import parser from './parser.js';

export default (filePath1, filePath2, format) => {
  const data1 = parser(filePath1);
  const data2 = parser(filePath2);

  const result = getFormattedDiff(data1, data2, format);
  console.log(result);
  return result;
};
