const firstNormalize = require('../index.js');

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const firstNormalizedTable = firstNormalize(table);
  document.querySelector('article').append(firstNormalizedTable);
});
