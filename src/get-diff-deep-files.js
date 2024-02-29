import parser from './parser.js';
import getDiffDeepObjects from './get-diff-deep-objects.js';

export default (filePath1, filePath2) => {
  const data1 = parser(filePath1);
  const data2 = parser(filePath2);

  const res = getDiffDeepObjects(data1, data2);
  console.log(res);
  return res;
};
