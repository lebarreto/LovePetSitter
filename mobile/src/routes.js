import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import RoutesPets from './RoutesPets';
import Contact from './pages/Contact';
import Services from './pages/Services';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer> 
      {signed === false ? (
        <>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="SignIn" component={SignIn} />
            <AppStack.Screen name="SignUp" component={SignUp} />
          </AppStack.Navigator>
        </>
      ) : (
        <>
          <Tab.Navigator 
            screenOptions={{ headerShown: false}}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#d29dc9',
              }
            }}
          >
            <Tab.Screen 
              name="Dashboard" 
              component={Dashboard} 
              options={{
                tabBarLabel: 'Agenda',
                tabBarIcon: ({ color }) => (
                  <Icon name="event" size={20} color={color} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Pets" 
              component={RoutesPets} 
              options={{
                tabBarLabel: 'Pets',
                tabBarIcon: ({ color }) => (
                  <Icon name="pets" size={20} color={color} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Profile" 
              component={Profile} 
              options={{
                tabBarLabel: 'Meu perfil',
                tabBarIcon: ({ color }) => (
                  <Icon name="person" size={20} color={color} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Contact" 
              component={Contact} 
              options={{
                tabBarLabel: 'Contato',
                tabBarIcon: ({ color }) => (
                  <Icon name="phone-iphone" size={20} color={color} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Services" 
              component={Services} 
              options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ color }) => (
                  <Icon name="more-horiz" size={20} color={color} />
                ),
              }} 
            />
          </Tab.Navigator>
        </>
      )}        
    </NavigationContainer>
  )
}