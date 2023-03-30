import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../ConfirmEmailScreen/ConfirmEmailScreen';
import NewPasswordScreen from '../NewPasswordScreen/NewPasswordScreen';
import ResetPasswordScreen from '../ResetPasswordScreen/ResetPasswordScreen';
import AllTabs from '../AllTabs';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#eef2e6' },
        }}>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
        />
        <Stack.Screen
          name='ConfirmEmail'
          component={ConfirmEmailScreen}
        />
        <Stack.Screen
          name='NewPassword'
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name='AllTabs'
          component={AllTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
