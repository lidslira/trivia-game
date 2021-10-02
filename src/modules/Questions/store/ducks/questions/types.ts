import {Action} from 'redux';
import {Question} from '~/dtos';

export enum QuestionsTypes {
  GET_QUESTIONS = 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR',
}

export interface QuestionsState {
  loading: boolean;
  questionsList: Question;
}

export interface GetQuestionsProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS;
  payload: {id: number; difficultyLevel: string};
}

export interface GetQuestionsSuccessProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_SUCCESS;
  payload: {questionsList: Question};
}

export interface GetQuestionsErrorProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_ERROR;
}
