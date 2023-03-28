import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/empty-home-page.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Hey, wanna scan some items?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
