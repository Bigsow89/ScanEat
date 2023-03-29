import React from 'react';

import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

export default function Scanner() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text>ScanEat if you can Eat</Text>
    </SafeAreaView >
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

