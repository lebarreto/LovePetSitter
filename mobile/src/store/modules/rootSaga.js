import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import pets from './pets/sagas';

export default function* rootSaga() {
  return yield all([auth, pets]);
}
