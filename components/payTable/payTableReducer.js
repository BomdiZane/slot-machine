const defaultState = {
  winRows: [1, 5, '8']
};

const payTableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_WIN_ROWS':
      state = {
        ...state,
        winRows: action.payload,
      };
      break;
  }
  return state;
};

export default payTableReducer;
