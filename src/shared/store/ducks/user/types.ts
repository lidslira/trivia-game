import {Action} from 'redux';

export enum UserTypes {
  SAVE_USER_ANSWER = 'SAVE_USER_ANSWER',
  RESET_ANSWER = 'RESET_ANSWER',
  RESET_INFO = 'RESET_INFO',
}

export interface UserState {
  currentAnswer: {
    id: number | undefined;
    option: string;
  };
}

export interface ResetInfoProps extends Action {
  type: UserTypes.RESET_INFO;
}

export interface ResetAnswerProps extends Action {
  type: UserTypes.RESET_ANSWER;
}

export interface SaveUserAnswerProps extends Action {
  type: UserTypes.SAVE_USER_ANSWER;
  payload: {option: string};
}
