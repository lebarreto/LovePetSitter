import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, HeaderView, Line, PetList, Pet, Label, PetsInfo, HeaderText, PetImg, ViewInfo, ViewButton, Action, Info } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

export default function Pets() {
  const client = useSelector(state => state.auth.profile);
  const navigation = useNavigation();

  const [pets, setPets] = useState([]);

  async function loadPets() {
    const response = await api.get(`pets/${client.id}`);
    setPets(response.data);
  }

  useEffect(() => {
    loadPets();
  }, [pets]);

  return (
    <Container>
      <HeaderView>
        <Logo source={logo} />
        <HeaderText>Pets</HeaderText>
        <ViewButton>
          <Action onPress={() => navigation.navigate('AddPets')}>
            <Icon name="add-circle" size={32} color="#d29dc9" />
          </Action>
        </ViewButton>
        
      </HeaderView>
      <Line />
      <PetList 
        data={pets}
        keyExtractor={pet => String(pet.id)}
        onEndReach={loadPets}
        onEndReachedThreshold={0.2}
        renderItem={({ item: pet }) => (
          <Pet>
            <PetImg 
              source={{
                uri: pet.avatar_id
                  ? pet.avatar.url
                  : `https://api.adorable.io/avatars/285/${pet.name}.png`,
              }}
            />
            <ViewInfo>
              <Label>NOME</Label>
              <PetsInfo>{pet.name}</PetsInfo>
              <Label>IDADE</Label>
              <PetsInfo>{pet.age}</PetsInfo>
              <Label>SEXO</Label>
              <PetsInfo>{pet.sex}</PetsInfo>
              <Label>DESCRIÇÃO DO PET</Label>
              <Info multiline={true}>{pet.description}</Info>
            </ViewInfo>
          </Pet>
        )}
      />
    </Container>
  );
}
