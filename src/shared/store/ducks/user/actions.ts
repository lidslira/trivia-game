import {action} from 'typesafe-actions';
import {
  UserTypes,
  SaveUserAnswerProps,
  ResetInfoProps,
  ResetAnswerProps,
} from './types';

export const saveUserAnswerAction = (answer: string): SaveUserAnswerProps =>
  action(UserTypes.SAVE_USER_ANSWER, {answer});

export const resetInfoAction = (): ResetInfoProps =>
  action(UserTypes.RESET_INFO);

export const resetAnswerAction = (): ResetAnswerProps =>
  action(UserTypes.RESET_ANSWER);
