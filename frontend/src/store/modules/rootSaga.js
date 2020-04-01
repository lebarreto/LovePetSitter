import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import agenda from './agenda/sagas';
import client from './client/sagas';

export default function* rootSaga() {
  return yield all([auth, agenda, client]);
}
