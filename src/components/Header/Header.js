import React from 'react';
import Flag from '../Flag/Flag';

import {
  Container,
  FlagContainer,
  FlagButton,
  FlagsLeft,
  NewGame,
  ButtonLabel
} from './style';

const Header = ({flagsLeft, onFlagsPress, onNewGame}) => {
  return (
    <Container>
      <FlagContainer>
        <FlagButton onPress={onFlagsPress}>
          <Flag size={3} />
        </FlagButton>
        <FlagsLeft>{flagsLeft}</FlagsLeft>
      </FlagContainer>
      <NewGame onPress={onNewGame}>
        <ButtonLabel>Novo jogo</ButtonLabel>
      </NewGame>
    </Container>
  );
};

export default Header;
