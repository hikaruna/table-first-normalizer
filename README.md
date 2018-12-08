# TABLE FIRST NORMALIZER
[![npm version](https://badge.fury.io/js/%40hikaruna%2Ftable-first-normalizer.svg)](https://badge.fury.io/js/%40hikaruna%2Ftable-first-normalizer)

htmlのtableDOMを第一正規化します(rowspan, colspanを排除します)

## Instration

```
> npm i @hikaruna/table-first-normalizer
```

### Webpack

```
// your_entrypoint.js

const tableFirstNormalize = require('@hikaruna/table-first-normalizer);

```

### ScriptTag(github release hosting)

```
// your.html
<script src="https://github.com/hikaruna/table-first-normalizer/releases/download/vX.Y.Z/table-first-normalizer.umd.js"></script>
```


### ScriptTag(self hosting)

publish node_modules/@hikaruna/table-first-normalizer/dist/table-first-normalizer.umd.js to contentBase

```
// your.html
<script src="table-first-normalizer.umd.js"></script>
```

## Usage

```
const table = document.querySelector('table');
const firstNormalizedTable = tableFirstNormalize(table);
document.querySelector('body').appendChild(firstNormalizedTable);
```

## Development

```
> git clone table-first-normalizer
> cd table-first-normalizer
> npm install
> npm run dev
> open localhost:10001
```
