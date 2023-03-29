import React from 'react';
import { StyleSheet, StatusBar, Text, Image, SafeAreaView } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
