import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

export function* createPet({ payload }) {
  try {
    const { name, age, sex, type, description, avatar_id, client_id } = payload;

    const response = yield call(api.post, 'pets', {
      name, age, sex, type, description, avatar_id, client_id
    });

    if(response.data) {
      Alert.alert('Pet cadastrado com sucesso!');
    }
  } catch (error) {
    Alert.alert('Falha no cadastro do seu pet', 'Verifique os seus dados.');
  }
}

export default all([
  takeLatest('@pets/ADD_REQUEST', createPet),
]);
