import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'}}>
        <Text>1</Text>
      </View>
      <View style={{ 
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text>2</Text>
      </View>
      <View style={{
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: "row",
    width: '90%',
    height: '40%'
  },
});
