import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* updateClient({ payload }) {
  try {
    const { id, name, email, cellphone, address, city, uf } = payload;

    const response = yield call(api.put, `clients/${id}`, {
      name,
      email,
      cellphone,
      address,
      city,
      uf,
    });

    console.tron.log(response.data);

    toast.success('Cliente atualizado com sucesso!');

    history.push('/clients');
  } catch (error) {
    toast.error(
      'Falha na atualização do cliente, verifique os dados novamente.'
    );
  }
}

export function* deleteClient({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `clients/${id}`);

    toast.success('Cliente deletado com sucesso!');
    history.push('/clients');
  } catch (error) {
    toast.error('Falha na deleção do cliente.');
  }
}

export default all([
  takeLatest('@client/UPDATE_REQUEST', updateClient),
  takeLatest('@client/DELETE_REQUEST', deleteClient),
]);
