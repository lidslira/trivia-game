import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: 'OpenSans-Regular';
  margin: 30px;
`;

export const InfoContainer = styled.View.attrs(({theme}) => ({
  shadowOpacity: 3,
  shadowOffset: {height: 4, width: 5},
  shadowColor: theme.Colors.gray_dark,
  elevation: 7,
}))`
  padding: 15px 10px;
  justify-content: center;
  align-items: center;
  width: ${vs(300)}px;
  height: ${vs(300)}px;
  background: ${({theme}) => theme.Colors.LIGHT_SKY_BLUE};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BLACK};
  margin-bottom: ${vs(15)}px;
  margin: ${vs(10)}px;
  border-radius: 6px;
  flex-direction: column;
`;

export const InfoText = styled.Text`
  font-size: 18px;
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
  background-color: ${({theme}) => theme.Colors.BUTTON_COLOR};
`;
