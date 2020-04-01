import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';
import { deleteRequest } from '../../../store/modules/client/actions';

export default function ClientTable({ data }) {
  const dispatch = useDispatch();

  const PNF = PhoneNumberFormat;
  const phoneUtil = PhoneNumberUtil.getInstance();
  const number = phoneUtil.parseAndKeepRawInput(data.cellphone, 'BR');

  function handleDelete(data) {
    dispatch(deleteRequest(data));
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.name}</small>
      <small>{data.email}</small>
      <small>{phoneUtil.format(number, PNF.INTERNATIONAL)}</small>
      <small>
        {data.address}, {data.city} - {data.uf}
      </small>

      <ButtonMore>
        <Button>
          <div>
            <button
              onClick={() => history.push(`/client/${data.id}`)}
              type="button"
            >
              <FiEdit color="#4D85EE" size={20} />
              <span>Editar</span>
            </button>
          </div>
          <div>
            <button onClick={() => handleDelete(data.id)} type="button">
              <FiTrash2 color="#DE3B3B" size={20} />
              <span>Excluir</span>
            </button>
          </div>
        </Button>
      </ButtonMore>
    </Container>
  );
}

ClientTable.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    cellphone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    uf: PropTypes.string,
  }).isRequired,
};
