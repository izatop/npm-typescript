import logger from 'npm-typed-logger-example';

const log = logger('app', process.stdout);
log('Hello, World', {param: 'value'}, 12345);
