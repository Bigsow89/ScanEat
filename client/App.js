import { View, StyleSheet } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import AuthNav from './screens/AuthNav'; //AuthNav
import AppNav from './screens/AppNav'; //AppNav

const App = () => {
  const isLoggedIn = true;
  return (
    <View style={styles.root}>
      {isLoggedIn ? <AppNav /> : <AuthNav />}
      {/* <AllTabs /> */}
      {/* <Navigation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
