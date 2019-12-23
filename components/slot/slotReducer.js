import update from 'immutability-helper';

const defaultState = {
  isSpinning: false,
};

const slotReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_IS_SPINNING':
      state = update(state, { isSpinning: { $set: action.payload }});
      break;
  }
  return state;
};

export default slotReducer;
