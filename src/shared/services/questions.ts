import {QUESTIONS_PATH} from '../constants/api';
import request from './request';

export const getQuestions = async (id: string, difficultyLevel: string) => {
  try {
    const response = await request.get(QUESTIONS_PATH, {
      id,
      difficultyLevel,
    });
    return response;
  } catch {
    return null;
  }
};
