import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CategoryCard = styled.TouchableOpacity.attrs(({theme}) => ({
  shadowOpacity: 3,
  shadowOffset: {height: 2, width: 2},
  shadowColor: theme.Colors.gray_dark,
  elevation: 7,
}))`
  padding: 20px 15px;
  justify-content: center;
  width: 100%;
  background: ${({theme}) => theme.Colors.COLOR_APPLICATION};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BLACK};
  margin-bottom: ${vs(15)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const Touchable = styled.TouchableOpacity``;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.Colors.BLACK};
  font-size: 18px;
`;
