export function setWinRows(rowIDs=['x']) {
  return {
    type: 'SET_WIN_ROWS',
    payload: rowIDs
  };
}

export function setLastReward(amount=0) {
  return {
    type: 'SET_LAST_REWARD',
    payload: amount
  };
}

export function addWinRow(value) {
  return {
    type: 'ADD_WIN_ROW',
    payload: value
  };
}
