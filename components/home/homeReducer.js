const defaultState = {
  storageIsAvailable: false,
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STORAGE_AVAILABILITY':
      state = {
        ...state,
        storageIsAvailable: action.payload,
      };
      break;
  }
  return state;
};

export default mainReducer;
