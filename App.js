import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import MineField from './src/components/MineField/MineField';
import {
  cloneBoard,
  createMinedBoard,
  hadExplosion,
  openField,
  showMines,
  wonGame,
} from './src/functions';

import './src/params';
import params from './src/params';

const App = () => {
  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    if (board.length === 0) {
      const cols = params.getColumnsAmount();
      const rows = params.getRowsAmount();
      const createBoard = createMinedBoard(rows, cols, minesAmount());
      setBoard(createBoard);
    }
  }, []);

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const onOpenField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    openField(clonedBoard, row, column);
    const lose = hadExplosion(clonedBoard);
    const won = wonGame(clonedBoard);

    if (lose) {
      showMines(clonedBoard);
      Alert.alert('Você perdeu!');
    }

    if (won) {
      Alert.alert('Você venceu!!');
    }

    setBoard(clonedBoard);
    setLose(lose);
    setWon(won);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Campo Minado!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <MineField board={board} onOpenField={onOpenField} />
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
