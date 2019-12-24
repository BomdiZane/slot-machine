import update from 'immutability-helper';

const defaultState = {
  winRows: [],
  lastReward: 0,
};

const payTableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_WIN_ROWS':
      state = update(state, { winRows: { $set: action.payload }});
      break;
    case 'ADD_WIN_ROW':
      state = update(state, { winRows: { $push: [action.payload] }});
      break;
    case 'SET_LAST_REWARD':
      state = update(state, { lastReward: { $set: action.payload }});
      break;
  }
  return state;
};

export default payTableReducer;
