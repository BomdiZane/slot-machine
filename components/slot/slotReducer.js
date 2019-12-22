const defaultState = {
  activeReel: ''
};

const reelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_REEL':
      state = {
        ...state,
        activeReel: action.payload,
      };
      break;
  }
  return state;
};

export default reelReducer;
