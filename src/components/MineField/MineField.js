import React from 'react';
import {View} from 'react-native';
import Field from '../Field';

import {Container} from './style';

const MineField = ({board}) => {
  const rows = board.map((row, rowIndex) => {
    const columns = row.map((field, columnIndex) => {
      return <Field {...field} key={columnIndex} />;
    });
    return (
      <View style={{flexDirection: 'row'}} key={rowIndex}>
        {columns}
      </View>
    );
  });
  return <Container>{rows}</Container>;
};

export default MineField;
