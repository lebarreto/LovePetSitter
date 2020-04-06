import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, HeaderView } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <HeaderView>
        <Icon name="power-settings-new" size={32} color="#d29dc9" />
      </HeaderView>
    </Container>
  );
}
