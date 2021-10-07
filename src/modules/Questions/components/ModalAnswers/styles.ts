import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.GRAY_LIGHT};
  flex: 1;
  padding: ${s(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
  padding: ${s(20)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${vs(10)}px;
  width: 100%;
`;

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${vs(10)}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${vs(50)}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BUTTON_COLOR};
  justify-content: center;
  align-items: center;
  border-radius: ${vs(10)}px;
  margin-top: ${vs(10)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${s(20)}px;
  color: ${({theme}) => theme.Colors.ERROR};
`;

export const Title = styled.Text`
  margin-left: ${s(10)}px;
  font-size: ${s(18)}px;
  color: ${({theme}) => theme.Colors.BLACK};
`;
