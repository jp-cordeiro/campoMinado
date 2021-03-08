import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Field from './src/components/Field';

import './src/params';
import params from './src/params';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={4} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
