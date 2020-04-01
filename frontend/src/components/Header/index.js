import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo.png';
import * as AuthActions from '../../store/modules/auth/actions';
import api from '../../services/api';

export default function Header() {
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);

  async function loadInfo() {
    const response = await api.get('user');
    setUser(response.data);
  }

  useEffect(() => {
    loadInfo();
  }, [profile]);

  function handleLogout() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Love PetSitter" />
          <hr />
          <Link to="/dashboard">AGENDA</Link>
          <Link to="/clients">CLIENTES</Link>
          <Link to="/pets">PETS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleLogout}>
                {' '}
                Sair do Love Pet Sitter
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
