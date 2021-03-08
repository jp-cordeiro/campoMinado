import React, {useEffect, useState} from 'react';

import {Container, FlagPole, FlagStyle, Base1, Base2} from './style';

const Flag = (props) => {
  const {size} = props;
  const [sizeFlag, setSizeFlag] = useState(1);
  useEffect(() => {
    if (size) {
      setSizeFlag(size);
    }
  }, []);
  return (
    <Container size={sizeFlag}>
      <FlagPole size={sizeFlag} />
      <FlagStyle size={sizeFlag} />
      <Base1 size={sizeFlag} />
      <Base2 size={sizeFlag} />
    </Container>
  );
};

export default Flag;
