import axios from 'axios';
import {CATEGORIES_PATH} from '../constants/api';

const api = axios.create({
  baseURL: CATEGORIES_PATH,
});

export default api;
