import { combineReducers } from 'redux';

import auth from './auth/reducer';
import agenda from './agenda/reducer';
import client from './client/reducer';

export default combineReducers({
  auth,
  agenda,
  client,
});
