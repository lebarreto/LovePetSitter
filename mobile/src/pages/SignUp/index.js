import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { Container, Logo, ViewSign, Form, FormInput, FormLabel, Line,  SignLink, SignLinkText, ViewButton, Action, ActionText } from './styles';
import logo from '../../assets/image.jpg';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const cellphoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const ufRef = useRef();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, cellphone, address, city, uf, password));
  }

  return (
    <Container>
      <ViewSign>
        <Logo source={logo} />
        
        <Form>
          <FormLabel>NAME</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu nome completo"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>E-MAIL</FormLabel>
          <FormInput 
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu e-mail"
            value={email}
            ref={emailRef}
            onSubmitEditing={() => cellphoneRef.current.focus()}
            onChangeText={setEmail}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>CELULAR</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="+55 (61) 91111-1111"
            value={cellphone}
            ref={cellphoneRef}
            onSubmitEditing={() => addressRef.current.focus()}
            onChangeText={setCellphone}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>RUA</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua rua"
            value={address}
            ref={addressRef}
            onSubmitEditing={() => cityRef.current.focus()}
            onChangeText={setAddress}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>CIDADE</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua cidade"
            value={city}
            ref={cityRef}
            onSubmitEditing={() => ufRef.current.focus()}
            onChangeText={setCity}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>UF</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu estado"
            value={uf}
            onChangeText={setUf}
            ref={ufRef}
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
            onChangeText={setPassword}
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
          />
          <Line />
          <ViewButton>
            <Action onPress={handleSubmit}>
              <ActionText>Cadastrar</ActionText>
            </Action>
          </ViewButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </ViewSign>
    </Container>
  );
}
