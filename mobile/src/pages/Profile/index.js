import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

import { Container, HeaderView, Logo, HeaderText, ViewSign, Form, FormText, FormLabel, Line, ViewButton, Action, ActionText } from './styles';
import logo from '../../assets/logo.png';

export default function Profile() {
  const client = useSelector(state => state.auth.profile);

  const PNF = PhoneNumberFormat;
  const phoneUtil = PhoneNumberUtil.getInstance();
  const number = phoneUtil.parseAndKeepRawInput(client.cellphone, 'BR');

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderView>
        <Logo source={logo} />
        <HeaderText>Meu perfil</HeaderText>
        <TouchableHighlight onPress={handleLogout}>
          <Icon name="power-settings-new" size={32} color="#d29dc9" />
        </TouchableHighlight>    
      </HeaderView>
      <Line />
      <ViewSign>
        <Form>
          <FormLabel>NOME</FormLabel>
          <FormText>{client.name}</FormText>
          <Line />
          <FormLabel>E-MAIL</FormLabel>
          <FormText>{client.email}</FormText>
          <Line />
          <FormLabel>CELULAR</FormLabel>
          <FormText>{phoneUtil.format(number, PNF.INTERNATIONAL)}</FormText>
          <Line />
          <FormLabel>RUA</FormLabel>
          <FormText>{client.address}</FormText>
          <Line />
          <FormLabel>CIDADE</FormLabel>
          <FormText>{client.city}</FormText>
          <Line />
          <FormLabel>UF</FormLabel>
          <FormText>{client.uf}</FormText>
          <Line />
        </Form>
      </ViewSign>
    </Container>
  );
}
