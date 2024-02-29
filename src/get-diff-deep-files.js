import parser from './parser.js';

const getDiffDeepObjects = (data1, data2) => {
  console.log(data1);
  console.log(data2);
};

export default (filePath1, filePath2) => {
  const data1 = parser(filePath1);
  const data2 = parser(filePath2);

  return getDiffDeepObjects(data1, data2);
};
