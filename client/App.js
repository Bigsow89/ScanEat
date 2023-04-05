import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from '../client/Routers/index';
import LoginProvider from './Context/LoginProvider';


const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </LoginProvider>

  );
};
export default App;
