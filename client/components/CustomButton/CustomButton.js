import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: '#0c8079',
    padding: 10,
    marginVertical: 5,
  },
  container_TERTIARY: {
    marginBottom: 25,
  },

  container_SECONDARY: {
    backgroundColor: '#0c8079',
    padding: 10,
    marginVertical: 25,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: '#223827',
  },
});

export default CustomButton;
