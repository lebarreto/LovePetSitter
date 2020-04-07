import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native';

import { Container, Logo, HeaderView, Line, AgendaList, Agenda, Label, AgendaDate, AgendaName, HeaderText } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { signOut } from '../../store/modules/auth/actions';

export default function Dashboard() {
  const client = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  const [agenda, setAgenda] = useState([]);

  function formatDate(data) {
    return data.map((agendas) => ({
      ...agendas,
      dateFormated: agendas.date
        ? format(parseISO(agendas.date), 'dd/MM/yyyy')
        : null,
      hourFormated: agendas.date
        ? format(parseISO(agendas.date), 'HH:mm:ss')
        : null,
    }));
  }

  async function loadAgenda() {
    const response = await api.get(`agendas/${client.id}`, {
      calceled_at: null,
    });
    const data = formatDate(response.data);
    setAgenda(data);
  }

  useEffect(() => {
    loadAgenda();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderView>
        <Logo source={logo} />
        <HeaderText>Agenda</HeaderText>
        <TouchableHighlight onPress={handleLogout}>
          <Icon name="power-settings-new" size={32} color="#d29dc9" />
        </TouchableHighlight>    
      </HeaderView>
      <Line />
      <AgendaList 
        data={agenda}
        keyExtractor={agendas => String(agendas.id)}
        onEndReach={loadAgenda}
        onEndReachedThreshold={0.2}
        renderItem={({ item: agendas }) => (
          <Agenda past={agendas.past}>
            <Label>DATA</Label>
            <AgendaDate>{agendas.dateFormated} às {agendas.hourFormated}</AgendaDate>
            <Label>PET SITTER</Label>
            <AgendaName>{agendas.user.name}</AgendaName>
          </Agenda>
        )}
      />
    </Container>
  );
}
