import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const TextTitle = styled.Text`
  font-size: 22px;
  font-family: 'OpenSans-Regular';
  text-align: center;
`;

export const QuestionContainer = styled.View`
  margin: ${vs(20)}px;
  padding: ${vs(15)}px;
  border-radius: 6px;
  width: 100%;
`;

export const InfoContainer = styled.View`
  margin: ${vs(10)}px;
`;

export const InfoText = styled.Text`
  font-size: 22px;
  font-family: 'OpenSans-Regular';
`;

export const Difficulty = styled.Text`
  font-size: 19px;
  font-family: 'OpenSans-Regular';
`;

export const ScoreInfo = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const AnswerContainer = styled.TouchableOpacity.attrs(({theme}) => ({
  shadowOpacity: 3,
  shadowOffset: {height: 2, width: 2},
  shadowColor: theme.Colors.gray_dark,
  elevation: 7,
}))`
  padding: 15px 10px;
  justify-content: center;
  width: ${vs(250)}px;
  background: ${({theme}) => theme.Colors.LIGHT_SKY_BLUE};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BLACK};
  margin-bottom: ${vs(15)}px;
  margin: ${vs(10)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const AnswerText = styled.Text`
  font-size: 18px;
  font-family: 'OpenSans-Light';
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${vs(150)}px;
  height: ${vs(50)}px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 10px;
  margin: 30px;
  padding: 10px;
  border-color: ${({theme}) => theme.Colors.BLACK};
  background-color: ${({theme, disabled}) =>
    disabled ? theme.Colors.GRAY_LIGHT : theme.Colors.BUTTON_COLOR};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
`;
