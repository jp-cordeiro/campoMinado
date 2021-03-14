import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #eee;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const FlagContainer = styled.View`
  flex-direction: row;
`;

export const FlagsLeft = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-top: 5px;
  margin-left: 20px;
`;

export const FlagButton = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 30px;
`;

export const NewGame = styled.TouchableOpacity`
  background-color: #999;
  padding: 10px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
  color: #ddd;
`;
