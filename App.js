import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import Header from './src/components/Header/Header';
import MineField from './src/components/MineField/MineField';
import {
  cloneBoard,
  createMinedBoard,
  hadExplosion,
  openField,
  showMines,
  wonGame,
  invertFlag,
  flagsUsed,
} from './src/functions';

import './src/params';
import params from './src/params';

const App = () => {
  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = useCallback(() => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const createBoard = createMinedBoard(rows, cols, minesAmount());
    setBoard(createBoard);
    setLose(false);
    setWon(false);
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

  const onSelectField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    invertFlag(clonedBoard, row, column);
    const won = wonGame(clonedBoard);

    if (won) {
      Alert.alert('Você venceu!!');
    }

    setBoard(clonedBoard);
    setLose(lose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={newGame}
      />
      <MineField
        board={board}
        onSelectField={onSelectField}
        onOpenField={onOpenField}
      />
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
