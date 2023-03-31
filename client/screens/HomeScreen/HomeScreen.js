import React from 'react';
import { StyleSheet, StatusBar, Text, Image, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <Image
        source={require('../../assets/empty-home-page.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Hey, wanna scan some items?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2e6',
  },
  image: {
    width: 240,
    height: 240,
    opacity: 0.7,
  },
  text: {
    fontSize: 24,
    paddingTop: 20,
    opacity: 0.5,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
