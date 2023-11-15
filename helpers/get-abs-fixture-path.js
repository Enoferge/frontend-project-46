import path from 'path';
import { fileURLToPath } from 'url';

export default (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, '..', '__fixtures__', filename);
};
