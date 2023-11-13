import { Command } from 'commander';

import parser from './parser.js';

const program = new Command();

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

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = parser(filepath1);
    const data2 = parser(filepath2);

    const result = getDiff(data1, data2);
    console.log(result);
  });

program.parse();

export default program;
