import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import AuthNav from '../screens/AuthNav';
import AppNav from '../screens/AppNav';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Start'
        component={StartScreen}
      />
      <Stack.Screen
        name='AuthNav'
        component={AuthNav}
      />
      <Stack.Screen
        name='AppNav'
        component={AppNav}
      />
    </Stack.Navigator>
  );
};
export default Routers;
