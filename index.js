import { Command } from 'commander';

import getDiffFiles from './src/get-diff-files.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const result = getDiffFiles(filepath1, filepath2);
    console.log(result);
  });

program.parse();

export default program;
