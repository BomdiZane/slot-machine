export function setWinRows(rowIDs=['x']) {
  return {
    type: 'SET_WIN_ROWS',
    payload: rowIDs
  };
}

export function addWinRow(value) {
  return {
    type: 'ADD_WIN_ROW',
    payload: value
  };
}
