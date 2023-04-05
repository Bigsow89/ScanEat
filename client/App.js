// import { AppRegistry, StyleSheet } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainNavigator from './components/MainNavigator';
// import LoginProvider from './Context/LoginProvider';
// const App = () => {
//   //const isLoggedIn = false;

//   return (
//     <>
//       <LoginProvider>
//         <NavigationContainer>
//           <MainNavigator />
//         </NavigationContainer>
//       </LoginProvider>
//     </>
//   );
// };
// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from '../client/Routers/index';
import LoginProvider from './Context/LoginProvider';
import StartScreen from './screens/StartScreen';

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
