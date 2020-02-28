import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...props.testStyle}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  buttonText: {
    color: Colors.background,
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default MainButton;
