import { Command } from 'commander';

import parser from './parser.js';

const program = new Command();

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
    })

program.parse()

export default program
