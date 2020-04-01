import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { parseISO, format } from 'date-fns';

import { Container, AgendaHeader, Table } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import history from '../../services/history';
import DashTable from './DashTable';

export default function Dashboard() {
  const [agenda, setAgenda] = useState([]);

  function formatDate(data) {
    return data.map((agendas) => ({
      ...agendas,
      dateFormated: agendas.date
        ? format(parseISO(agendas.date), 'dd/MM/yyyy')
        : null,
      canceled_dateFormated: agendas.calceled_at
        ? format(parseISO(agendas.calceled_at), 'dd/MM/yyyy')
        : null,
    }));
  }

  async function loadAgenda() {
    const response = await api.get('agenda', {
      calceled_at: null,
    });
    const data = formatDate(response.data);
    setAgenda(data);
  }

  useEffect(() => {
    loadAgenda();
  }, []);

  return (
    <Container>
      <Header />
      <AgendaHeader>
        <h1>Agenda</h1>
        <button type="button" onClick={() => history.push('/agenda')}>
          Criar um agendamento
          <FiPlus size={30} color="#cf298d" />
        </button>
      </AgendaHeader>
      <Table>
        <section>
          <strong>ID</strong>
          <strong>Cliente</strong>
          <strong>Date</strong>
          <strong>Ações</strong>
        </section>
      </Table>
      {agenda.map((agendas) => (
        <DashTable key={agendas.id} data={agendas} />
      ))}
    </Container>
  );
}
