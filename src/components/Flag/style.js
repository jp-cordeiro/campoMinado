import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${({size}) => size * 2}px;
`;

export const FlagPole = styled.View`
  position: absolute;
  height: ${({size}) => size * 14}px;
  width: ${({size}) => size * 2}px;
  background-color: #222;
  margin-left: ${({size}) => size * 9}px;
`;

export const FlagStyle = styled.View`
  position: absolute;
  height: ${({size}) => size * 5}px;
  width: ${({size}) => size * 6}px;
  background-color: #f22;
  margin-left: ${({size}) => size * 3}px;
`;

export const Base1 = styled.View`
  position: absolute;
  height: ${({size}) => size * 2}px;
  width: ${({size}) => size * 6}px;
  background-color: #222;
  margin-left: ${({size}) => size * 7}px;
  margin-top: ${({size}) => size * 10}px;
`;

export const Base2 = styled.View`
  position: absolute;
  height: ${({size}) => size * 2}px;
  width: ${({size}) => size * 10}px;
  background-color: #222;
  margin-left: ${({size}) => size * 5}px;
  margin-top: ${({size}) => size * 12}px;
`;
