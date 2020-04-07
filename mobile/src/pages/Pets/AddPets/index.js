import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ViewSign, Form, FormInput, FormLabel, Line, ViewButton, Action, ActionText } from './styles';
import { addRequest } from '../../../store/modules/pets/actions';

export default function AddPets() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [client_id, setClient_id] = useState('');
  
  const ageRef = useRef();
  const sexRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();

  var avatar_id = 0;

  const client = useSelector(state => state.auth.profile);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  function handleSubmit() {
    if(type === 'Cachorro') {
      avatar_id = 3;
    }
    else{
      avatar_id = 2;
    }

    console.tron.log(avatar_id);
    dispatch(addRequest(name, age, sex, type, description, avatar_id, client.id));
    navigation.navigate('Pets');
  }

  return(
    <Container>
      <ViewSign>        
        <Form>
        <FormLabel>NOME</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome do seu pet"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => ageRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>IDADE</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Idade do seu pet"
            value={age}
            ref={ageRef}
            onChangeText={setAge}
            onSubmitEditing={() => sexRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>SEXO</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sexo do seu pet"
            value={sex}
            ref={sexRef}
            onChangeText={setSex}
            onSubmitEditing={() => typeRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>TIPO</FormLabel>
          <FormInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Tipo do seu pet"
            value={type}
            ref={typeRef}
            onChangeText={setType}
            onSubmitEditing={() => descriptionRef.current.focus()}
            returnKeyType="next"
          />
          <Line />
          <FormLabel>DESCRIÇÃO DO SEU PET</FormLabel>
          <FormInput 
            autoCorrect={false}
            multiline={true}
            placeholder="Descrição do seu pet"
            value={description}
            ref={descriptionRef}
            onChangeText={setDescription}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
          />
          <Line />
          <ViewButton>
            <Action onPress={handleSubmit}>
              <ActionText>Salvar</ActionText>
            </Action>
          </ViewButton>
        </Form>
      </ViewSign>
    </Container>
   );
}