import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Pets from './pages/Pets';
import AddPets from './pages/Pets/AddPets';

const Stack = createStackNavigator();

export default function RoutesPets() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Pets"
        component={Pets}
      />
      <Stack.Screen
        screenOptions={{ headerShown: false}}
        options={{
          title: 'Adicionar um Pet',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#d29dc9',
            elevation: 0,
          },
          headerBackTitle:'Voltar',
        }}
        name="AddPets"
        component={AddPets}
      />
    </Stack.Navigator>
  );
}