import { Command } from 'commander';

import getDiffFiles from './src/get-diff-files.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, { format }) => {
    const diff = getDiffFiles(filepath1, filepath2, format === 'stylish' ? undefined : format);
    console.log(diff);
  });

program.parse();

export default program;
