
import { AppRegistry, StyleSheet } from 'react-native';
import React from 'react';
//import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import { registerRootComponent } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './components/MainNavigator';
import LoginProvider from './Context/LoginProvider'
const App = () => {
  //const isLoggedIn = false;
 
  return (
  <>
    <LoginProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </LoginProvider>
  </>

  );
};
export default App;
