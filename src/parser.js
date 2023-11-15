import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';
import yamlParser from 'js-yaml';

export default (filePath) => {
  const extension = path.extname(filePath);
  const preparedFilePath = path.resolve(cwd(), filePath);
  const data = readFileSync(preparedFilePath, 'utf-8');

  let parse;

  if (['.yaml', '.yml'].includes(extension)) {
    parse = yamlParser.load;
  } else {
    parse = JSON.parse;
  }
  return parse(data);
};
