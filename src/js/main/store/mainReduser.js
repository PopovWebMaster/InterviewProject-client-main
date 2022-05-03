import { combineReducers } from 'redux';

import { massageReduser } from './massageFromServer/reduser.js';

export default combineReducers({
	massageFromServer: massageReduser,
});