import {s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
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
  background: ${({theme}) => theme.Colors.LIGHT_SKY_BLUE};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BLACK};
  margin-bottom: ${vs(10)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.Colors.BLACK};
  font-family: OpenSans-Light;
  font-size: 18px;
`;

export const Title = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 10px;
`;

export const TextTitle = styled.Text`
  color: ${({theme}) => theme.Colors.BLACK};
  font-family: 'OpenSans-Regular';
  font-weight: bold;
  font-size: ${s(20)}px;
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
`;
