import { readFileSync } from 'fs'; 
import path from 'path';
import { cwd } from 'process'

export default (filePath) => {
    const currentDir = cwd()
    const extension = filePath.split('.').pop();
    const preparedFilePath = path.resolve(currentDir, filePath)
    const data = readFileSync(preparedFilePath)

    if (extension === 'json') {
        return JSON.parse(data)
    }
    return data
} 