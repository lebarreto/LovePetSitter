import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { Container, Logo, ViewSign, Form, FormInput, FormLabel, Line,  SignLink, SignLinkText, ViewButton, Action, ActionText } from './styles';
import logo from '../../assets/image.jpg';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return(
    <Container>
      <ViewSign>
        <Logo source={logo} />
        
        <Form>
          <FormLabel>E-MAIL</FormLabel>
          <FormInput 
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu e-mail"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>SENHA</FormLabel>
          <FormInput 
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            value={password}
            ref={passwordRef}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
          />
          <Line />
          <ViewButton>
            <Action onPress={handleSubmit}>
              <ActionText>Entrar</ActionText>
            </Action>
          </ViewButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar uma conta</SignLinkText>
        </SignLink>
      </ViewSign>
    </Container>
   );
}