const colspanNormalize = (table) => {
  const newTable = table.cloneNode(false);

  for (let tr of table.querySelectorAll('tr').values()) {
    let newTr = tr.cloneNode(false);

    for (let td of tr.querySelectorAll('th, td').values()) {
      const colspan = Number(td.getAttribute('colspan')) || 1;
      for (let i = 0; i < colspan; i++) {
        const clonedTd = td.cloneNode(true);
        clonedTd.removeAttribute('colspan');
        newTr.appendChild(clonedTd);
      }
    }

    newTable.appendChild(newTr);
  }

  return newTable;
};

const rowspanNormalize = (colspanNormalizedTable) => {
  const trLength = colspanNormalizedTable.querySelectorAll('tr').length;
  const tdLength = colspanNormalizedTable.querySelector('tr').querySelectorAll('th, td').length;

  const trList = Array.from(colspanNormalizedTable.querySelectorAll('tr').values()).map(tr => Array.from(tr.querySelectorAll('th, td').values()));

  let tableModel = [];
  for (let trIndex = 0; trIndex < trLength; trIndex++) {
    tableModel.push([]);
  }
  for (let trIndex = 0; trIndex < trLength; trIndex++) {
    const tdList = trList.shift();

    for (let tdIndex = 0; tdIndex < tdLength; tdIndex++) {
      if(tableModel[trIndex][tdIndex] !== undefined) {
        continue;
      }

      const td = tdList.shift();
      const rowspan = Number(td.getAttribute('rowspan')) || 1;
      for(let rowspanCursor = 0; rowspanCursor<rowspan; rowspanCursor++) {
        const rowspanStripedTd = ((td)=> {
          const clonedTd = td.cloneNode(true);
          clonedTd.removeAttribute('rowspan');
          return clonedTd;
        })(td);
        tableModel[trIndex + rowspanCursor][tdIndex] = rowspanStripedTd;
      }
    }
  }

  const newTable = colspanNormalizedTable.cloneNode(false);
  for(let [i, trModel] of tableModel.entries()) {
    const newTr = colspanNormalizedTable.querySelectorAll('tr')[i].cloneNode(false);
    for(let newTd of trModel) {
      newTr.appendChild(newTd);
    }
    newTable.appendChild(newTr);
  }

  return newTable;
};

const tableFirstNormalize = (table) => {
  return rowspanNormalize(colspanNormalize(table));
};

export default tableFirstNormalize;
