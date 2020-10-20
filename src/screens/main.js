import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button'
export default function Main() {

  return (
    <View style={styles.container}>
      <View style={styles.display}>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <Button number="c" highlight={true} />
          <Button number="del" highlight={true}/>
          <Button number="%" highlight={true}/>
          <Button number="/" highlight={true}/>
        </View>

        <View style={styles.row}>
          <Button number="7"/>
          <Button number="8"/>
          <Button number="9"/>
          <Button number="x" highlight={true} />
        </View>

        <View style={styles.row}>
          <Button number="4" />
          <Button number="5" />
          <Button number="6" />
          <Button number="-" highlight={true} />
        </View>

        <View style={styles.row}>
          <Button number="1" />
          <Button number="2" />
          <Button number="3" />
          <Button number="+" highlight={true} />
        </View>

        <View style={styles.row}>
          <Button number="M+" highlight={true} />
          <Button number="0" />
          <Button number="," />
          <Button number="=" highlight={true} />
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  display: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '30%',
    maxHeight: '30%',
    height: '30%',
    backgroundColor: '#111111'
  },
  keyboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '70%',
    maxHeight: '70%',
    height: '70%',
    backgroundColor: '#000000'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});
