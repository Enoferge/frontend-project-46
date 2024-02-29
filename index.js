import { Command } from 'commander';

// import getDiff from './src/get-diff-flat-files.js';
import getDiff from './src/get-diff-deep-files.js';


const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const result = getDiff(filepath1, filepath2);
    console.log('RESULT')
    console.log(JSON.stringify(result));
  });

program.parse();

export default program;
