export function setWinRows(rowIDs=[]) {
  return {
    type: 'SET_WIN_ROWS',
    payload: rowIDs
  };
}
