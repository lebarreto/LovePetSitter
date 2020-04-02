import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2, FiEye } from 'react-icons/fi';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';

export default function PetsTable({ data }) {
  return (
    <Container>
      <small>#{data.id}</small>
      <small>
        <img
          src={data.avatar_id ? data.avatar.url : null}
          alt={data.avatar_id ? data.avatar.name : null}
        />
      </small>
      <small>{data.name}</small>
      <small>{data.age}</small>
      <small>{data.sex}</small>
      <small>{data.client_id ? data.owner.name : null}</small>

      <ButtonMore>
        <Button>
          <div>
            <button
              onClick={() => history.push(`/pet/${data.id}`)}
              type="button"
            >
              <FiEye color="#4D85EE" size={20} />
              <span>Visualizar</span>
            </button>
          </div>
          <div>
            <button onClick={() => {}} type="button">
              <FiTrash2 color="#DE3B3B" size={20} />
              <span>Excluir</span>
            </button>
          </div>
        </Button>
      </ButtonMore>
    </Container>
  );
}

PetsTable.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.string,
    sex: PropTypes.string,
    avatar_id: PropTypes.number,
    avatar: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
    }),
    client_id: PropTypes.number,
    owner: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};
