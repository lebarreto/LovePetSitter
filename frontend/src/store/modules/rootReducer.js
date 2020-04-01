import { combineReducers } from 'redux';

import auth from './auth/reducer';
import agenda from './agenda/reducer';

export default combineReducers({
  auth,
  agenda,
});
