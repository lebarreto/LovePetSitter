import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* cancelAgenda({ payload }) {
  try {
    const { id } = payload;
    const calceled_at = new Date();

    const response = yield call(api.put, `agenda/${id}`, {
      calceled_at,
    });

    console.tron.log(response.data);

    toast.success('Cancelado com sucesso!');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha no cancelamento.');
  }
}

export function* createAgenda({ payload }) {
  try {
    const { date, client_id, user_id } = payload;

    console.tron.log(date, client_id, user_id);
    const response = yield call(api.post, 'agenda', {
      date,
      client_id,
      user_id,
    });

    console.tron.log(response.data, 'ooi');

    toast.success('Agendamento criado com sucesso!');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na criação do agendamento.');
  }
}

export default all([
  takeLatest('@agenda/CANCEL_REQUEST', cancelAgenda),
  takeLatest('@agenda/ADD_REQUEST', createAgenda),
]);
