import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from '../components/button';
import Swiper from 'react-native-swiper'

let hist = [];

export default function Main() {
  const [result, setResult] = useState('0');
  const [memo, setMemo] = useState('0');

  useEffect(() => {
    if (result.slice(0, 5) === 'Error' && result.length > 5)
      setResult(result.slice(5, result.length))
    if (result.length === 1)
      return
    if (result.slice(0,1) === '0')
      setResult(result.slice(1, result.length))
  }, [result])


  return (
    <Swiper loop={false} showsButtons={false} showsPagination={false}>
      <View style={styles.history}>
        <Text style={styles.textHistory}>Resultados:</Text>
        <ScrollView>
          {
            hist.map((item) => (
            <Text style={styles.textHistory}>{item}</Text>
            ))
          }
        </ScrollView>
      </View>
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.row}>
            <Button number="c" highlight={true} pressButton={() => setResult('0')}/>
            <Button number="del" highlight={true} pressButton={
              () => { 
                if (result.length === 1)
                  return setResult('0')
                setResult(result.slice(0, result.length - 1))
              }
            }/>
            <Button number="Mc" highlight={true} pressButton={() => setMemo('0')} />

          </View>

          <View style={styles.row}>
            <Button number="x²" highlight={true} pressButton={() => setResult(eval(Math.pow(eval(result).toString(), 2)).toString())}/>
            <Button number="log" highlight={true} pressButton={() => setResult(eval(Math.log(eval(result).toString())).toString())}/>
            <Button number="√" highlight={true} pressButton={() => setResult(eval(Math.pow(eval(result).toString(), 0.5)).toString())}/>
            <Button number="/" highlight={true} pressButton={() => setResult(result + '/')} />
          </View>

          <View style={styles.row}>
            <Button number="7" pressButton={() => setResult(result + '7')} />
            <Button number="8" pressButton={() => setResult(result + '8')}/>
            <Button number="9" pressButton={() => setResult(result + '9')}/>
            <Button number="x" highlight={true} pressButton={() => setResult(result + '*')}/>
          </View>

          <View style={styles.row}>
            <Button number="4" pressButton={() => setResult(result + '4')}/>
            <Button number="5" pressButton={() => setResult(result + '5')}/>
            <Button number="6" pressButton={() => setResult(result + '6')}/>
            <Button number="-" highlight={true} pressButton={() => setResult(result + '-')}/>
          </View>

          <View style={styles.row}>
            <Button number="1" pressButton={() => setResult(result + '1')}/>
            <Button number="2" pressButton={() => setResult(result + '2')}/>
            <Button number="3" pressButton={() => setResult(result + '3')}/>
            <Button number="+" highlight={true} pressButton={() => setResult(result + '+')}/>
          </View>

          <View style={styles.row}>
            <Button number="M+" highlight={true} pressButton={
              () => {
                if(memo === '0')
                  return setMemo(result)

                setResult(result + memo)
              }
            }/>
            <Button number="0" pressButton={() => setResult(result + '0')}/>
            <Button number="," pressButton={() => setResult(result + '.')}/>
            <Button number="=" highlight={true}  pressButton={
              () => {
                try {
                  if(result === 'Error')
                    return setResult('0')
                  setResult(eval(result).toString())
                  hist.push(eval(result).toString())
                }
                catch (e) {
                  setResult('Error')
                }
              }
              }/>
          </View>
        </View>
      </View>
      <View style={styles.history}>
        <Text style={styles.textHistory}>Créditos</Text>
        <Text style={styles.textHistory}></Text>
        <Text style={styles.textHistory}>Alunos:</Text>
        <Text style={styles.textHistory}>Flávio Luis</Text>
        <Text style={styles.textHistory}>Vinicius Bagode</Text>
        <Text style={styles.textHistory}></Text>
        <Text style={styles.textHistory}>Professor:</Text>
        <Text style={styles.textHistory}>Will</Text>

      </View>
    </Swiper>
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '30%',
    maxHeight: '30%',
    height: '30%',
    backgroundColor: '#111111',
    paddingRight: 15,
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
  history: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
    fontSize: 30,
    color: '#ff9f21', 
    padding: 15,
    paddingTop: 35
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  result: {
    color: '#ff9f21',
    fontSize: 64,
    textAlign: 'right'
  },
  textHistory: {
    fontSize: 30,
    color: '#ff9f21'
  }
});
