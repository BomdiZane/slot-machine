import { combineReducers } from 'redux';

import home from '../components/home/homeReducer';
import body from '../components/body/bodyReducer';
import header from '../components/header/headerReducer';
import popup from '../components/popup/popupReducer';

export default combineReducers({ home, body, header, popup });
