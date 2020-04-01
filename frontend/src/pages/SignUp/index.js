import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import logo from '../../assets/image.jpg';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  cellphone: Yup.string().required('O telefone é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, cellphone, password }) {
    dispatch(signUpRequest(name, email, cellphone, password));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <img src={logo} alt="Love PetSitter" />
          <p> SEU NOME </p>
          <Input name="name" placeholder="Nome" />
          <p> SEU E-MAIL </p>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <p> SEU TELEFONE </p>
          <Input name="cellphone" placeholder="+55 (61) 91111-1111" />
          <p>SUA SENHA</p>
          <Input name="password" type="password" placeholder="*********" />
          <button type="submit">Entrar no Sistema</button>
          <Link to="/">
            <FiLogIn size={20} color="#d29dc9" />
            Já tenho cadastro
          </Link>
        </Form>
      </Content>
    </Container>
  );
}
