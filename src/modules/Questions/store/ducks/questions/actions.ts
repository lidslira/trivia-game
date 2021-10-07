import {action} from 'typesafe-actions';
import {QuestionsResponseProps} from '~/dtos';

import {
  QuestionsTypes,
  GetQuestionsProps,
  GetQuestionsSuccessProps,
  GetQuestionsErrorProps,
} from './types';

export const getQuestionsAction = (
  id: string,
  difficultyLevel: string,
): GetQuestionsProps =>
  action(QuestionsTypes.GET_QUESTIONS, {id, difficultyLevel});

export const getQuestionsSuccessAction = (
  questionsList: QuestionsResponseProps,
): GetQuestionsSuccessProps =>
  action(QuestionsTypes.GET_QUESTIONS_SUCCESS, {questionsList});

export const getQuestionsErrorAction = (): GetQuestionsErrorProps =>
  action(QuestionsTypes.GET_QUESTIONS_ERROR);
