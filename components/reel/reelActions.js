export function updateReel(reel, key, value) {
  return {
    type: 'UPDATE_REEL',
    payload: { reel, key, value }
  };
}

export function setControlIsActive(value) {
  return {
    type: 'SET_CONTROL_IS_ACTIVE',
    payload: value
  };
}

export function updateActiveReel(value) {
  return {
    type: 'UPDATE_ACTIVE_REEL',
    payload: value
  };
}
