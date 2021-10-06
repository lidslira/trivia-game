import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {decode} from 'html-entities';
import {useFormik} from 'formik';
import {Question} from '~/dtos';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {CATEGORIES} from '~/shared/constants/routes';
import RadioButtonList from '../components/RadioButton/RadioButtonList';
import {resetAnswerAction} from '~/shared/store/ducks/user/actions';
import {allOptionsMixed} from '../utils';
import {setScoreAction} from '../store/ducks/questions/actions';

export interface OptionsProps {
  id: number;
  answer: string;
}

const Questions: React.FC = () => {
  const navigation = useNavigation();

  const {questionsList, score} = useSelector(
    (state: ApplicationState) => state.questions,
  );

  const {currentAnswer} = useSelector((state: ApplicationState) => state.user);

  const [questions, setQuestions] = useState<Question>();
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState<OptionsProps[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!questions) {
      return;
    }
    const newAnswersArr = allOptionsMixed(
      questions?.incorrect_answers,
      questions?.correct_answer,
    );
    setOptions(newAnswersArr);
  }, [questions, currentAnswer]);

  const nextQuestion = () => {
    if (questionIndex === 9) {
      setQuestionIndex(0);
      navigation.navigate(CATEGORIES);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const saveUserAnswer = (actions: any) => {
    actions.resetForm();
    dispatch(resetAnswerAction());
    nextQuestion();
  };

  const {handleSubmit, dirty, setFieldValue, values} = useFormik({
    initialValues: {
      currentAnswer,
    },
    enableReinitialize: true,
    onSubmit: saveUserAnswer,
    validateOnChange: false,
  });

  useEffect(() => {
    if (questionsList) {
      setQuestions(questionsList[questionIndex]);
      setQuestionTitle(decode(questions?.question));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionsList, questionIndex, questions]);

  return (
    <S.Container>
      <S.QuestionContainer>
        <S.TextTitle> {questionTitle} </S.TextTitle>
      </S.QuestionContainer>
      <RadioButtonList
        selected={values.currentAnswer}
        checkRadio={(value) => {
          setFieldValue('currentAnswer', value);
        }}
        data={options}
      />
      <S.Button disabled={!dirty} onPress={() => handleSubmit()}>
        <S.ButtonText>{questionIndex === 9 ? 'Finish' : 'Next'}</S.ButtonText>
      </S.Button>
      <S.InfoContainer>
        <S.InfoText>
          {questionIndex + 1} / {questionsList?.length}
        </S.InfoText>
      </S.InfoContainer>
      {score !== undefined && (
        <S.InfoContainer>
          <S.ScoreInfo>Score: {score}</S.ScoreInfo>
        </S.InfoContainer>
      )}
    </S.Container>
  );
};
export default Questions;
