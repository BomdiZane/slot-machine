const defaultState = {
  currentPage: 'home',
  currentTheme: 'dark',
  processing: false,
};

const bodyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PAGE':
      state = {
        ...state,
        currentPage: action.payload
      };
      break;
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
    case 'TOGGLE_PROCESSING':
      state = {
        ...state,
        processing: !state.processing
      };
      break;
    case 'SET_PROCESSING':
      state = {
        ...state,
        processing: action.payload
      };
      break;
  }
  return state;
};

export default bodyReducer;
