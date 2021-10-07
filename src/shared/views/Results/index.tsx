import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CATEGORIES} from '~/shared/constants/routes';
import {ApplicationState} from '~/shared/store';
import {setScoreAction} from '~/shared/store/ducks/user/actions';

import * as S from './styles';

const Results: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {score} = useSelector((state: ApplicationState) => state.user);

  const replay = () => {
    dispatch(setScoreAction(0));
    navigation.navigate(CATEGORIES);
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <S.TextTitle>RESULTS</S.TextTitle>
        <S.InfoText> Final Score: {score} </S.InfoText>
        <S.Button onPress={() => replay()}>
          <S.InfoText> Try again </S.InfoText>
        </S.Button>
      </S.InfoContainer>
    </S.Container>
  );
};
export default Results;
