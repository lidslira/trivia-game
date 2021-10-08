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

  const user = useSelector((state: ApplicationState) => state.user);

  const allWrongAnswers =
    user.easy.wrongAnswers + user.medium.wrongAnswers + user.hard.wrongAnswers;

  const replay = () => {
    dispatch(setScoreAction(0));
    navigation.navigate(CATEGORIES);
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <S.TextTitle> RESULTS </S.TextTitle>
        <S.InfoText> Yout Final Score: {score}! </S.InfoText>
        <S.InfoText>
          You got right {score} questions. {`\n`}
          {user.easy.rightAnswers} were easy level.
        </S.InfoText>
        {user?.medium?.rightAnswers ? (
          <S.InfoText>{user.medium.rightAnswers} were medium level.</S.InfoText>
        ) : null}
        {user.hard.rightAnswers ? (
          <S.InfoText> • {user.hard.rightAnswers} were hard level. </S.InfoText>
        ) : null}
        <S.InfoText>
          You got wrong {allWrongAnswers} questions. {`\n`}•
          {user.easy.wrongAnswers} were easy level.
        </S.InfoText>
        {user.medium.wrongAnswers ? (
          <S.InfoText>
            • {user.medium.wrongAnswers} were medium level.
          </S.InfoText>
        ) : null}
        {user.hard.wrongAnswers ? (
          <S.InfoText> • {user.hard.wrongAnswers} were hard level. </S.InfoText>
        ) : null}
        <S.Button onPress={() => replay()}>
          <S.InfoText> Try again </S.InfoText>
        </S.Button>
      </S.InfoContainer>
    </S.Container>
  );
};
export default Results;
