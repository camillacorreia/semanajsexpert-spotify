import fs from 'fs';
import fsPromises from 'fs/promises';

import config from './config.js';
import { join } from 'path';

const {
  dir: {
    publicDirectory
  }
} = config;

export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async getFileInfo(file) {
    // file = home/index.html
    const fullFilepath = join(publicDirectory, file);

    //valida se existe, caso não, mostra erro
    await fsPromises.access(fullFilepath);
    
    const fileType = extname(fullFilepath);
    return {
      type: fileType,
      name: fullFilepath
    }
  }

  async getFileStream(file) {
    const {

    } = await this.getFileInfo(file)
    return {
      stream: this.createFileStream()
    }
  }
}