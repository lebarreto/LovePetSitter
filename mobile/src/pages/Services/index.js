import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native';
import { Linking } from 'react-native';

import { Container, Logo, HeaderView, Line, HeaderText, ContactBox, ContactDescription, ServiceHeader, ServiceDescription, MoreLink, MoreLinkText } from './styles';
import logo from '../../assets/logo.png';
import { signOut } from '../../store/modules/auth/actions';
import api from '../../services/api';

export default function Services() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const message = `Olá Love Pet Sitter, estou entrando em contato pois gostaria de obter mais informações sobre os valores dos serviços.`;

  async function loadUser() {
    const response = await api.get(`user/1`);
    setUser(response.data);
    console.tron.log(response.data);
  }

  useEffect(() => {
    loadUser();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }
  
  function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=${user.cellphone}&text=${message}`);
  }

  return (
    <Container>
      <HeaderView>
        <Logo source={logo} />
        <HeaderText>Serviços</HeaderText>
        <TouchableHighlight onPress={handleLogout}>
          <Icon name="power-settings-new" size={32} color="#d29dc9" />
        </TouchableHighlight>    
      </HeaderView>
      <Line />
      <ContactBox>
        <ContactDescription>Detalhes dos nossos serviços:</ContactDescription>
        <ServiceHeader>Para gatos:</ServiceHeader>
        <ServiceDescription>Visita com duração de 1 hora. O preço é calculado dependendo da quantidade de gatos e quantidade de dias de serviço desejado. Nessa visita limpamos a caixa de areia, fazemos reposição de água e ração, podemos cortar as unhas dos gatos e escovar os pelos e também brincamos com eles.</ServiceDescription>
        <ServiceHeader>Para cachorros:</ServiceHeader>
        <ServiceDescription>Visita e passeio. Limpamos, colocamos água e ração  e podemos cortar unhas e escovar pêlos. A visita tem duração de 1 hora, com o foco em passeio. O preço é definido dependendo do porte do cachorro, de quantos são e da quantidade de dias de serviços contratados.</ServiceDescription>
        
        <MoreLink onPress={sendWhatsapp}>
          <MoreLinkText>Saber valores e mais detalhes</MoreLinkText>
        </MoreLink>
      
      </ContactBox>
    </Container>
  );
}
