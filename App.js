import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Field from './src/components/Field';
import MineField from './src/components/MineField/MineField';
import {createMineBoard} from './src/functions';

import './src/params';
import params from './src/params';

const App = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const createBoard = createMineBoard(rows, cols, minesAmount());
    setBoard(createBoard);
  }, []);

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <MineField board={board} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
