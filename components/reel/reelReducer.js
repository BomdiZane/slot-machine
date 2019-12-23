import update from 'immutability-helper';

const defaultState = {
  reel: {
    reelOne: {
      symbol: 'BAR',
      position: 'Center'
    },
    reelTwo: {
      symbol: 'BAR',
      position: 'Center'
    },
    reelThree: {
      symbol: 'BAR',
      position: 'Center'
    },
  },
  controlIsActive: false,
  activeReel: ''
};

const reelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_REEL':
      state = update(state, { reel: { [action.payload.reel]: { [action.payload.key] : { $set: action.payload.value }}}});
      break;
    case 'SET_CONTROL_IS_ACTIVE':
      state = update(state, { controlIsActive: { $set: action.payload }});
      break;
    case 'UPDATE_ACTIVE_REEL':
      state = update(state, { activeReel: { $set: action.payload }});
      break;
  }
  return state;
};

export default reelReducer;
