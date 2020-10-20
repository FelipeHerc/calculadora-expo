import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Button( { number, highlight } ) {

  return (
    <TouchableHighlight style={styles.button} onPress={() => console.log(number)}>
      <Text style={{ fontSize: 30, color: highlight ? '#ff9f21' : '#ffffff' }}>{number}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "25%",
    borderColor: "red",
    borderRadius: 3,
    borderStyle: 'solid',
    backgroundColor: '#111111',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
