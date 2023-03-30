import React from 'react';
import { StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';

export default function Search() {
  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <Text>Search</Text>
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
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
