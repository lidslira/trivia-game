import {action} from 'typesafe-actions';
import {Question} from '~/dtos';

import {
  QuestionsTypes,
  GetQuestionsProps,
  GetQuestionsSuccessProps,
  GetQuestionsErrorProps,
} from './types';

export const getQuestionsAction = (
  id: number,
  difficultyLevel: string,
): GetQuestionsProps =>
  action(QuestionsTypes.GET_QUESTIONS, {id, difficultyLevel});

export const getQuestionsSuccessAction = (
  questionsList: Question,
): GetQuestionsSuccessProps =>
  action(QuestionsTypes.GET_QUESTIONS_SUCCESS, {questionsList});

export const getQuestionsErrorAction = (): GetQuestionsErrorProps =>
  action(QuestionsTypes.GET_QUESTIONS_ERROR);
