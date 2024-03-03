import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';
import yamlParser from 'js-yaml';

export default (filePath) => {
  const extension = path.extname(filePath);
  const preparedFilePath = path.resolve(cwd(), filePath);
  const data = readFileSync(preparedFilePath, 'utf-8');

  if (['.yaml', '.yml'].includes(extension)) {
    return yamlParser.load(data);
  }
  return JSON.parse(data);
};
