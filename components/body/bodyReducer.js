const defaultState = {
  currentTheme: 'dark',
};

const bodyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      state = {
        ...state,
        currentTheme: action.payload
      };
      break;
    case 'TOGGLE_THEME':
      state = {
        ...state,
        currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark'
      };
      break;
  }
  return state;
};

export default bodyReducer;
