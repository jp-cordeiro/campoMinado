import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import '../params';
import params from '../params';
import Mine from './Mine';

const Field = ({mined, opened, nearMines, exploded}) => {
  const styleField = [styles.field];
  if (opened) {
    styleField.push(styles.opened);
  }
  if (exploded) {
    styleField.push(styles.exploded);
  }
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2a28d7';
    if (nearMines == 2) color = '#2b520f';
    if (nearMines > 2 && nearMines < 6) color = '#f9060a';
    if (nearMines >= 6) color = '#f221a9';
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

export default Field;