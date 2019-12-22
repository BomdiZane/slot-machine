const defaultState = {
  activeRow: ''
};

const payTableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_ROW':
      state = {
        ...state,
        activeRow: action.payload,
      };
      break;
  }
  return state;
};

export default payTableReducer;
