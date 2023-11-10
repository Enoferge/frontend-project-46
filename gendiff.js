import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1.0')
    .helpOption('-h, --help', 'output usage information')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format');

program.parse()

export default program
