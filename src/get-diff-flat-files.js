import getDiffFlatObjects from './get-diff-flat-objects.js';
import parser from './parser.js';

export default (filePath1, filePath2) => {
  const data1 = parser(filePath1);
  const data2 = parser(filePath2);

  return getDiffFlatObjects(data1, data2);
};
