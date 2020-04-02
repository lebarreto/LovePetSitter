import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, PetHeader, Modal } from './styles';
import api from '../../../services/api';
import Header from '../../../components/Header';
import history from '../../../services/history';

export default function PetsModal({ match }) {
  const { id } = match.params;
  const [pet, setPet] = useState('');

  async function loadPet() {
    const response = await api.get(`pet/${id}`);
    setPet(response.data);
  }

  useEffect(() => {
    loadPet();
  }, []);

  return (
    <Container>
      <Header />
      <PetHeader>
        <h1>Informações do Pet</h1>
        <button type="button" onClick={history.goBack}>
          Voltar
          <FiArrowLeft size={30} color="#cf298d" />
        </button>
      </PetHeader>
      <Modal>
        <div>
          <img
            src={pet.avatar_id ? pet.avatar.url : null}
            alt={pet.avatar_id ? pet.avatar.name : null}
          />
        </div>
        <div>
          <p>Nome</p>
          <label>{pet.name}</label>
        </div>
        <div>
          <p>Idade</p>
          <label>{pet.age}</label>
        </div>
        <div>
          <p>Sexo</p>
          <label>{pet.sex}</label>
        </div>
        <div>
          <p>Descrição</p>
          <label>{pet.description}</label>
        </div>
        <div>
          <p>Dono</p>
          <label>{pet.client_id ? pet.owner.name : null}</label>
        </div>
      </Modal>
    </Container>
  );
}

PetsModal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
