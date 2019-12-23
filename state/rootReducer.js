import { combineReducers } from 'redux';

import home from '../components/home/homeReducer';
import body from '../components/body/bodyReducer';
import popup from '../components/popup/popupReducer';
import reel from '../components/reel/reelReducer';
import slot from '../components/slot/slotReducer';

export default combineReducers({ home, body, popup, reel, slot });
