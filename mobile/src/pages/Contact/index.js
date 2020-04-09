import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import { Container, Logo, HeaderView, Line, HeaderText, ContactBox, ContactDescription, ViewButton, ActionText, Action } from './styles';
import logo from '../../assets/logo.png';
import { signOut } from '../../store/modules/auth/actions';
import api from '../../services/api';

export default function Contact() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const message = `Olá Love Pet Sitter, estou entrando em contato pois gostaria de obter mais informações sobre os pacotes e tirar dúvidas.`;

  async function loadUser() {
    const response = await api.get(`user/1`);
    setUser(response.data);
    console.tron.log(response.data);
  }

  useEffect(() => {
    loadUser();
  }, []);

  function sendMail() {
		MailComposer.composeAsync({
			subject: 'Informações',
			recipients: [user.email],
			body: message
		});
  }
  
  function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=${user.cellphone}&text=${message}`);
  }
  
  function openFacebook() {
    Linking.openURL('https://www.facebook.com/LovePetSitter');
  }

  function openInstagram() {
    Linking.openURL('instagram://user?username=love.petsitter');
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderView>
        <Logo source={logo} />
        <HeaderText>Contato</HeaderText>
        <TouchableHighlight onPress={handleLogout}>
          <Icon name="power-settings-new" size={32} color="#d29dc9" />
        </TouchableHighlight>    
      </HeaderView>
      <Line />
      <ContactBox>
        <ContactDescription>Entre em contato com nossos Pet Sitters:</ContactDescription>
        <ViewButton>
          <Action onPress={sendWhatsapp}>
						<ActionText>WhatsApp</ActionText>
					</Action>
					<Action onPress={sendMail}>
						<ActionText>E-mail</ActionText>
					</Action>
          <Action onPress={openFacebook}>
						<ActionText>Facebook</ActionText>
					</Action>
          <Action onPress={openInstagram}>
						<ActionText>Instagram</ActionText>
					</Action>
        </ViewButton>
      </ContactBox>
    </Container>
  );
}
