export default (list) => {
  console.log('stylish new');
  console.log(list);
  list.sort((a, b) => a.key > b.key ? 1 : -1);

  // const listToString = list.map(())

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
