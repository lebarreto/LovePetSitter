import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import { cancelRequest } from '../../../store/modules/agenda/actions';

export default function DashTable({ data }) {
  const dispatch = useDispatch();

  console.tron.log(data);

  function handleCancel(data) {
    console.tron.log(data);
    dispatch(cancelRequest(data));
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.client.name}</small>
      <small>{data.dateFormated}</small>

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

DashTable.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    client: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};
