import React, { useState, useEffect } from 'react';

import { Container, ClientHeader, Table } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import ClientTable from './ClientTable';

export default function Clients() {
  const [clients, setClients] = useState([]);

  async function loadClients() {
    const response = await api.get('clients');
    setClients(response.data);
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Container>
      <Header />
      <ClientHeader>
        <h1>Clientes</h1>
      </ClientHeader>
      <Table>
        <section>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>E-mail</strong>
          <strong>Telefone</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </section>
      </Table>
      {clients.map((client) => (
        <ClientTable key={client.id} data={client} />
      ))}
    </Container>
  );
}
