import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';

export default function ClientTable({ data }) {
  const dispatch = useDispatch();

  function handleCancel(data) {
    console.tron.log(data);
    //dispatch(cancelRequest(data));
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.name}</small>
      <small>{data.email}</small>
      <small>{data.cellphone}</small>
      <small>
        {data.address}, {data.city} - {data.uf}
      </small>

      <ButtonMore>
        <Button>
          <div>
            <button onClick={() => handleCancel(data.id)} type="button">
              <FiTrash2 color="#DE3B3B" size={20} />
              <span>Cancelar</span>
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
