import React, { useState, useEffect } from 'react';

import { Container, PetHeader, Table } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import PetsTable from './PetsTable';

export default function Pets() {
  const [pets, setPets] = useState([]);

  async function loadPets() {
    const response = await api.get('pets');
    setPets(response.data);
  }

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <Container>
      <Header />
      <PetHeader>
        <h1>Pets</h1>
      </PetHeader>
      <Table>
        <section>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Idade</strong>
          <strong>Sexo</strong>
          <strong>Dono</strong>
          <strong>Ações</strong>
        </section>
      </Table>
      {pets.map((pet) => (
        <PetsTable key={pet.id} data={pet} />
      ))}
    </Container>
  );
}
