import {action} from 'typesafe-actions';
import {QuestionsResponseProps} from '~/dtos';

import {
  QuestionsTypes,
  GetQuestionsProps,
  GetQuestionsSuccessProps,
  GetQuestionsErrorProps,
  SetIndexProps,
  SetScoreProps,
} from './types';

export const getQuestionsAction = (
  id: number,
  difficultyLevel: string,
): GetQuestionsProps =>
  action(QuestionsTypes.GET_QUESTIONS, {id, difficultyLevel});

export const getQuestionsSuccessAction = (
  questionsList: QuestionsResponseProps,
): GetQuestionsSuccessProps =>
  action(QuestionsTypes.GET_QUESTIONS_SUCCESS, {questionsList});

export const getQuestionsErrorAction = (): GetQuestionsErrorProps =>
  action(QuestionsTypes.GET_QUESTIONS_ERROR);

export const setIndexAction = (index: number): SetIndexProps =>
  action(QuestionsTypes.SET_INDEX, {index});

export const setScoreAction = (score: number): SetScoreProps =>
  action(QuestionsTypes.SET_SCORE, {score});
