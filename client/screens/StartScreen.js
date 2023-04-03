import { View, useWindowDimensions, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 3000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.navigate('AppNav');
    } else {
      navigation.navigate('AuthNav');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.image, { height: height * 0.5 }]}
        resizeMode='cover'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2e6',
  },
  image: {
    width: '30%',
    maxWidth: 500,
    maxHeight: 300,
    alignSelf: 'center',
  },
});

export default StartScreen;
