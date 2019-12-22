export function updateActiveRow(rowID='') {
  return {
    type: 'UPDATE_ACTIVE_ROW',
    payload: rowID
  };
}
