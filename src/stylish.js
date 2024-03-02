export default (diffObject) => {
  const indent = ' '.repeat(4);
  const iter = (diff, deep) => {
    const sortedDiff = getSortedFields(diff);
    const diffToString = sortedDiff.reduce((acc, { key, value, sign }) => {
      const indentsAfter = indent.repeat(deep);
      const indentsBefore = `${indentsAfter.slice(0, -2)}${getSignSymbol(sign)} `
      let stringValue;

      if (Array.isArray(value)) {
        stringValue =`{\n${iter(value, deep + 1)}${indentsAfter}}\n`;
      } else {
        stringValue =`${value}\n`;
      }

      acc += `${indentsBefore}${key}: ${stringValue}`;

      return acc;
    }, '');

    return diffToString;
  };

  return `{\n${iter(diffObject, 1)}}`;
};

const getSortedFields = (fields) => {
  return [...fields].sort((a, b) => {
    if (a.key === b.key) {
      return a.sign ? 1 : -1;
    }
    return a.key > b.key ? 1 : -1;
  });
}

const getSignSymbol = (sign) => {
  switch(sign) {
    case true:
      return '+'
    case false:
      return '-'
    default:
      return ' '
  }
}