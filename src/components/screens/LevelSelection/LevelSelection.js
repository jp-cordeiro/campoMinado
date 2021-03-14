import React from 'react';
import {Modal} from 'react-native';

import {Container, Frame, Title, Easy, Normal, Hard, LevelText} from './style';

const LevelSelection = ({onCancel, isVisible, onLevelSelected}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onCancel}
      visible={isVisible}>
      <Frame>
        <Container>
          <Title>Selecione a dificuldade:</Title>
          <Easy onPress={() => onLevelSelected(0.1)}>
            <LevelText>Fácil</LevelText>
          </Easy>
          <Normal onPress={() => onLevelSelected(0.2)}>
            <LevelText>Normal</LevelText>
          </Normal>
          <Hard onPress={() => onLevelSelected(0.3)}>
            <LevelText>Difícil</LevelText>
          </Hard>
        </Container>
      </Frame>
    </Modal>
  );
};

export default LevelSelection;
