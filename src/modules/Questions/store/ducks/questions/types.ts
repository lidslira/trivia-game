import {Action} from 'redux';
import {QuestionsResponseProps} from '~/dtos';

export enum QuestionsTypes {
  GET_QUESTIONS = 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR',

  SET_INDEX = 'SET_INDEX',
  SET_SCORE = 'SET_SCORE',
}

export interface QuestionsState {
  loading: boolean;
  questionsList: [];
  index: number;
  score: number;
}

export interface GetQuestionsProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS;
  payload: {id: number; difficultyLevel: string};
}

export interface GetQuestionsSuccessProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_SUCCESS;
  payload: {questionsList: QuestionsResponseProps};
}

export interface GetQuestionsErrorProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_ERROR;
}

export interface SetIndexProps extends Action {
  type: QuestionsTypes.SET_INDEX;
}

export interface SetScoreProps extends Action {
  type: QuestionsTypes.SET_SCORE;
}
