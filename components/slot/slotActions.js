export function setIsSpinning(value) {
  return {
    type: 'SET_IS_SPINNING',
    payload: value
  };
}

export function setWinPositions(positions=['x']) {
  return {
    type: 'SET_WIN_POSITIONS',
    payload: positions
  };
}

export function addWinPosition(value) {
  return {
    type: 'ADD_WIN_POSITION',
    payload: value
  };
}
