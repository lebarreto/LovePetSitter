import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import logo from '../../assets/image.jpg';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <img src={logo} alt="Love PetSitter" />
          <p> SEU E-MAIL </p>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <p>SUA SENHA</p>
          <Input name="password" type="password" placeholder="*********" />
          <button type="submit">Entrar no Sistema</button>
          <Link to="/register">
            <FiLogIn size={20} color="#d29dc9" />
            Não tenho cadastro
          </Link>
        </Form>
      </Content>
    </Container>
  );
}
