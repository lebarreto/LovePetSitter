import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import { Container, AgendaHeader, FormOrder } from './styles';
import Header from '../../../components/Header';
import history from '../../../services/history';
import api from '../../../services/api';
import { addRequest } from '../../../store/modules/agenda/actions';

export default function AddAgenda() {
  const [clients, setClients] = useState([]);
  const [client_id, setClientsId] = useState([]);
  const [date, setDate] = useState([]);

  const user_id = useSelector((state) => state.auth.profile.id);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('/clients');

      const data = response.data.map((client) => ({
        value: client.id,
        label: client.name,
      }));

      setClients(data);
    }

    loadClients();
  }, []);

  const handleClientChange = (e) => {
    setClientsId(e.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  function handleSubmit({ date, client_id, user_id }) {
    dispatch(addRequest(date, client_id, user_id));
  }

  return (
    <Container>
      <Header />
      <AgendaHeader>
        <h1>Agendamento</h1>
        <button type="button" onClick={history.goBack}>
          Voltar
          <FiArrowLeft size={30} color="#cf298d" />
        </button>
      </AgendaHeader>
      <Form onSubmit={() => handleSubmit({ date, client_id, user_id })}>
        <FormOrder>
          <div className="divSelect">
            <label>Cliente</label>
            <Select
              name="client_id"
              className="select"
              placeholder={'Selecione um cliente... '}
              options={clients}
              onChange={handleClientChange}
            />
          </div>
          <div className="divInp">
            <label>Data</label>
            <Input
              name="date"
              placeholder="yyyy-MM-dd HH:mm:ss"
              onChange={handleDateChange}
            />
          </div>
          <button type="submit">Salvar</button>
        </FormOrder>
      </Form>
    </Container>
  );
}
