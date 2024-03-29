#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/index.js';
import { FORMATTERS } from '../src/constants.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', FORMATTERS.STYLISH)
  .action((filepath1, filepath2, { format }) => {
    console.log(getDiff(
      filepath1,
      filepath2,
      format,
    ));
  });

try {
  program.parse();
} catch (err) {
  console.error(err);
}
