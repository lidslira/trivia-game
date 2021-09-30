import {CATEGORIES_PATH} from '../constants/api';
import request from './request';

export const showCategories = async () => {
  try {
    const response = await request.get(CATEGORIES_PATH);
    return response;
  } catch {
    return null;
  }
};
