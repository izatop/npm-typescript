# Install

`npm install --save npm-typed-logger-example`

# Usage

```ts
import logger from 'npm-typed-logger-example';

const log = logger('app', process.stdout);
log('Hello, World', {param: 'value'}, 1234);

```
