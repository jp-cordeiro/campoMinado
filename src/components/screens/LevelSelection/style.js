import styled from 'styled-components/native';

export const Frame = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.View`
  background-color: #eee;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const LevelText = styled.Text`
  font-size: 20px;
  color: #eee;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
`;

export const Easy = styled(Button)`
  background-color: #49b65d;
`;

export const Normal = styled(Button)`
  background-color: #2765f7;
`;

export const Hard = styled(Button)`
  background-color: #f26337;
`;
