import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppForm from '../components/AppForm';

import UserProfile from '../screens/Profile';
import {useLogin} from '../Context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
  
      <Stack.Screen component={Profile} name='UserProfile' />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;