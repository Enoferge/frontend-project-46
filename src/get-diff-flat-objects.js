import stylish from './stylish.js';

export default (data1, data2) => {
  const data2Copy = { ...data2 };
  const list = [];

  Object.entries(data1).forEach(([key, value]) => {
    if (data2Copy[key]) {
      if (data2Copy[key] === value) {
        list.push({ key, value, sign: undefined });
      } else {
        list.push({ key, value, sign: true });
        list.push({ key, value: data2Copy[key], sign: false });
      }
      delete data2Copy[key];
    } else {
      list.push({ key, value, sign: true });
    }
  });

  Object.entries(data2Copy).forEach(([key, value]) => {
    list.push({ key, value, sign: false });
  });

  return stylish(list);
};
