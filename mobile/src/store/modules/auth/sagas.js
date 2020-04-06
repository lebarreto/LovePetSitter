import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signInSuccess, signFailure } from './actions';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessionClient', {
      email,
      password,
    });

    const { clients } = response.data;

    yield put(signInSuccess(clients));
  } catch (error) {
    Alert.alert('Falha de autenticação', 'Verifique os seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, cellphone, address, city, uf, password } = payload;

    const response = yield call(api.post, 'clients', {
      name, email, cellphone, address, city, uf, password
    });

    if(response.data) {
      Alert.alert('Cliente cadastrado com sucesso!');
    }
  } catch (error) {
    Alert.alert('Falha no cadastro', 'Verifique os seus dados.');
    yield put(signFailure());
  }
}

export function signOut() {
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
