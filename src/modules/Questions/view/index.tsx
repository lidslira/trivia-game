import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {decode} from 'html-entities';
import {useFormik} from 'formik';
import {Question} from '~/dtos';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {RESULTS} from '~/shared/constants/routes';
import RadioButtonList from '../components/RadioButton/RadioButtonList';
import {
  resetAnswerAction,
  setScoreAction,
} from '~/shared/store/ducks/user/actions';
import {allOptionsMixed, verifyAnswers, verifyCorrectAnswer} from '../utils';
import ModalAnswers from '../components/ModalAnswers';

export interface OptionsProps {
  id: number;
  answer: string;
}

interface FormProps {
  currentAnswer: {
    answer: string;
  };
}
const Questions: React.FC = () => {
  const navigation = useNavigation();

  const {questionsList} = useSelector(
    (state: ApplicationState) => state.questions,
  );
  const {currentAnswer, score} = useSelector(
    (state: ApplicationState) => state.user,
  );

  const {categoryId} = useSelector(
    (state: ApplicationState) => state.categories,
  );

  const user = useSelector((state: ApplicationState) => state.user);

  const [questions, setQuestions] = useState<Question>();
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [questionDifficulty, setQuestionDifficulty] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isItRight, setIsItRight] = useState();
  const [difficultyHasChanged, setDifficultyHasChanged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!questions) {
      return;
    }
    const newAnswersArr: OptionsProps[] = allOptionsMixed(
      questions?.incorrect_answers,
      questions?.correct_answer,
    );
    setOptions(newAnswersArr);
  }, [questions]);

  const nextQuestion = () => {
    if (questionIndex === 9) {
      setQuestionIndex(0);
      navigation.navigate(RESULTS);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const closeModal = () => {
    setModalIsVisible(false);
    nextQuestion();
  };
  useEffect(() => {
    setDifficultyHasChanged(true);
  }, [questionDifficulty]);
  const saveUserAnswer = (data: FormProps, actions: any) => {
    verifyAnswers(
      questions?.correct_answer,
      data.currentAnswer.answer,
      questions?.difficulty,
      user,
      categoryId,
    );
    actions.resetForm();
    const verify = verifyCorrectAnswer(
      questions?.correct_answer,
      data.currentAnswer.answer,
      user,
    );
    setIsItRight(verify);

    setModalIsVisible(true);
    dispatch(resetAnswerAction());
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
    if (questionsList && !modalIsVisible) {
      setQuestions(questionsList[questionIndex]);
      setQuestionTitle(decode(questions?.question));
      setQuestionDifficulty(decode(questions?.difficulty));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionsList, questionIndex, questions, currentAnswer]);

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
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => {
          setModalIsVisible(true);
        }}>
        <ModalAnswers
          closeModal={() => closeModal()}
          message={isItRight ? 'Parabéns, lacrastes!' : 'Xii...errastes!'}
          buttonText={questionIndex === 9 ? 'See results' : 'Next question'}
          isItRight={!!isItRight}
        />
      </Modal>
      <S.InfoContainer>
        <S.InfoText>
          {questionIndex + 1} / {questionsList?.length}
        </S.InfoText>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.Difficulty>{questionDifficulty.toUpperCase()}</S.Difficulty>
      </S.InfoContainer>
    </S.Container>
  );
};
export default Questions;
