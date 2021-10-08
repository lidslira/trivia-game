import {Action} from 'redux';

export enum UserTypes {
  SAVE_USER_ANSWER = 'SAVE_USER_ANSWER',
  RESET_ANSWER = 'RESET_ANSWER',
  PREVIOUS_RESULT = 'PREVIOUS_RESULT',
  WRONG_QUESTIONS_STREAK = 'WRONG_QUESTIONS_STREAK',
  RIGHT_QUESTIONS_STREAK = 'RIGHT_QUESTIONS_STREAK',
  EASY_RIGHT_QUESTIONS = 'EASY_RIGHT_QUESTIONS',
  EASY_WRONG_QUESTIONS = 'EASY_WRONG_QUESTIONS',
  MEDIUM_RIGHT_QUESTIONS = 'MEDIUM_RIGHT_QUESTIONS',
  MEDIUM_WRONG_QUESTIONS = 'MEDIUM_WRONG_QUESTIONS',
  HARD_RIGHT_QUESTIONS = 'HARD_RIGHT_QUESTIONS',
  HARD_WRONG_QUESTIONS = 'HARD_WRONG_QUESTIONS',
  SET_SCORE = 'SET_SCORE',
  RESET_INFO = 'RESET_INFO',
}

interface AnswersProps {
  rightAnswers: number;
  wrongAnswers: number;
}

export interface UserState {
  previousAnswerResult: boolean | undefined;
  currentAnswer: {
    id: number | undefined;
    answer: string;
  };
  streak: AnswersProps;
  easy: AnswersProps;
  medium: AnswersProps;
  hard: AnswersProps;
  score: string;
}

export interface IncreaseWrongQuestionsStreakProps extends Action {
  type: UserTypes.WRONG_QUESTIONS_STREAK;
  payload: {wrongAnswers: number};
}

export interface IncreaseRightQuestionsStreakProps extends Action {
  type: UserTypes.RIGHT_QUESTIONS_STREAK;
  payload: {rightAnswers: number};
}

export interface IncreaseEasyRightQuestionsProps extends Action {
  type: UserTypes.EASY_RIGHT_QUESTIONS;
  payload: {rightAnswers: number};
}

export interface IncreaseEasyWrongQuestionsProps extends Action {
  type: UserTypes.EASY_WRONG_QUESTIONS;
  payload: {wrongAnswers: number};
}

export interface IncreaseMediumRightQuestionsProps extends Action {
  type: UserTypes.MEDIUM_RIGHT_QUESTIONS;
  payload: {rightAnswers: number};
}

export interface IncreaseMediumWrongQuestionsProps extends Action {
  type: UserTypes.MEDIUM_WRONG_QUESTIONS;
  payload: {wrongAnswers: number};
}

export interface IncreaseHardRightQuestionsProps extends Action {
  type: UserTypes.HARD_RIGHT_QUESTIONS;
  payload: {rightAnswers: number};
}

export interface IncreaseHardWrongQuestionsProps extends Action {
  type: UserTypes.HARD_WRONG_QUESTIONS;
  payload: {wrongAnswers: number};
}

export interface PreviousResultProps extends Action {
  type: UserTypes.PREVIOUS_RESULT;
  payload: {previousAnswerResult: boolean};
}

export interface ResetAnswerProps extends Action {
  type: UserTypes.RESET_ANSWER;
}

export interface SaveUserAnswerProps extends Action {
  type: UserTypes.SAVE_USER_ANSWER;
  payload: {answer: string};
}

export interface SetScoreProps extends Action {
  type: UserTypes.SET_SCORE;
  payload: {score: string};
}

export interface ResetInfosProps extends Action {
  type: UserTypes.RESET_INFO;
}
