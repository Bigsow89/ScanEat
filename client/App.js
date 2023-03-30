import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import AllTabs from './screens/AllTabs';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Navigation from './screens/Navigation';

const App = () => {
  return (
    <View style={styles.root}>
      {/* <LoginScreen /> */}
      {/* <AllTabs /> */}
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#eef2e6',
  },
});

export default App;
