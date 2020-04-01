import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, ClientHeader, FormClient } from './styles';
import Header from '../../../components/Header';
import history from '../../../services/history';
import api from '../../../services/api';
import { updateRequest } from '../../../store/modules/client/actions';

export default function EditClient({ match }) {
  const { id } = match.params;

  const [client, setClient] = useState('');
  const [, setName] = useState([]);
  const [, setEmail] = useState([]);
  const [, setCellphone] = useState([]);
  const [, setAddress] = useState([]);
  const [, setCity] = useState([]);
  const [, setUf] = useState([]);

  const dispatch = useDispatch();

  async function loadClient() {
    if (id) {
      const response = await api.get(`clients/${id}`);
      setClient(response.data);
    }
  }

  useEffect(() => {
    loadClient();
  }, [id]);

  const handleNameChange = (e) => {
    client.name = e.target.value;
    setName(client.name);
  };

  const handleEmailChange = (e) => {
    client.email = e.target.value;
    setEmail(client.email);
  };

  const handleCellphoneChange = (e) => {
    client.cellphone = e.target.value;
    setCellphone(client.cellphone);
  };

  const handleAddressChange = (e) => {
    client.address = e.target.value;
    setAddress(client.address);
  };

  const handleCityChange = (e) => {
    client.city = e.target.value;
    setCity(client.city);
  };

  const handleUfChange = (e) => {
    client.uf = e.target.value;
    setUf(client.uf);
  };

  function handleSubmit({ name, cellphone, email, address, city, uf }) {
    dispatch(updateRequest({ id, name, email, cellphone, address, city, uf }));
  }

  return (
    <Container>
      <Header />
      <ClientHeader>
        <h1>Editar um Cliente</h1>
        <button type="button" onClick={history.goBack}>
          Voltar
          <FiArrowLeft size={30} color="#cf298d" />
        </button>
      </ClientHeader>
      <Form initialData={client} onSubmit={handleSubmit}>
        <FormClient>
          <div>
            <label>Nome</label>
            <Input
              name="name"
              placeholder="Nome do cliente"
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label>E-mail</label>
            <Input
              name="email"
              type="email"
              placeholder="emaildocliente@email.com"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label>Telefone</label>
            <Input
              name="cellphone"
              placeholder="+55 61 91234-1234"
              onChange={handleCellphoneChange}
            />
          </div>
          <div>
            <label>Endereço</label>
            <Input
              name="address"
              placeholder="Rua e número"
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label>Cidade</label>
            <Input
              name="city"
              placeholder="Cidade"
              onChange={handleCityChange}
            />
          </div>
          <div className="divUf">
            <p>UF</p>
            <Input name="uf" placeholder="Estado" onChange={handleUfChange} />
          </div>
          <button type="submit">Salvar</button>
        </FormClient>
      </Form>
    </Container>
  );
}

EditClient.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
