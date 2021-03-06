import { combineReducers } from 'redux';

import body from '../components/body/bodyReducer';
import popup from '../components/popup/popupReducer';
import reel from '../components/reel/reelReducer';
import slot from '../components/slot/slotReducer';
import payTable from '../components/payTable/payTableReducer';

export default combineReducers({ body, popup, reel, slot, payTable });
