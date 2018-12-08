# TABLE FIRST NORMALIZER
[![npm version](https://badge.fury.io/js/%40hikaruna%2Ftable_first_normalizer.svg)](https://badge.fury.io/js/%40hikaruna%2Ftable_first_normalizer)

htmlのtableDOMを第一正規化します(rospan, colspanを排除します)

## Usage

### Webpack

```
> npm i @hikaruna/table_first_normalizer
```

```
// your_entrypoint.js

const firstNormalize = require('@hikaruna/table_first_normalizer);

const table = document.querySelector('table');
const firstNormalizedTable = firstNormalize(table);
document.querySelector('body').appendChild(firstNormalizedTable);
```

## Development

```
> git clone table_first_normalizer
> cd table_first_normalizer
> npm i
> npx webpack-dev-server
> open localhost:8080
```
