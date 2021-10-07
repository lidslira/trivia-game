import {Action} from 'redux';
import {QuestionsResponseProps} from '~/dtos';

export enum QuestionsTypes {
  GET_QUESTIONS = 'GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR',
}

export interface QuestionsState {
  loading: boolean;
  questionsList: [];
}

export interface GetQuestionsProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS;
  payload: {id: string; difficultyLevel: string};
}

export interface GetQuestionsSuccessProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_SUCCESS;
  payload: {questionsList: QuestionsResponseProps};
}

export interface GetQuestionsErrorProps extends Action {
  type: QuestionsTypes.GET_QUESTIONS_ERROR;
}
