import { logger } from './util.js';

async function routes(request, response) {
  return response.end('hello :)');
}

export function handler(request, response) {
  return routes(request, response)
    .catch(error => logger.error(`Tem um erro: ${error.stack}`));
}