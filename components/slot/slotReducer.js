import update from 'immutability-helper';

const defaultState = {
  isSpinning: false,
  winPositions: []
};

const slotReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_IS_SPINNING':
      state = update(state, { isSpinning: { $set: action.payload }});
      break;
    case 'SET_WIN_POSITIONS':
      state = update(state, { winPositions: { $set: action.payload }});
      break;
    case 'ADD_WIN_POSITION':
      state = update(state, { winPositions: { $push: [action.payload] }});
      break;
  }
  return state;
};

export default slotReducer;
