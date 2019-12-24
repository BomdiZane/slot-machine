import update from 'immutability-helper';

const defaultState = {
  winRows: []
};

const payTableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_WIN_ROWS':
      state = {
        ...state,
        winRows: action.payload,
      };
      break;
    case 'ADD_WIN_ROW':
      state = update(state, { winRows: { $push: [action.payload] }});
      break;
  }
  return state;
};

export default payTableReducer;
