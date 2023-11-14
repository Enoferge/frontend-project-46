const getDiff = (data1, data2) => {
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

  list.sort((a, b) => a.key > b.key ? 1 : -1);

  const listToString = list.reduce((acc, { key, value, sign }) => {
    let signSymbol = '+';
    if (!sign) {
      signSymbol = sign === false ? '-' : ' ';
    }

    // eslint-disable-next-line no-param-reassign
    acc += ` ${signSymbol} ${key}: ${value}\n`;
    return acc;
  }, '');

  return `{\n${listToString}}`;
};

export default getDiff;
