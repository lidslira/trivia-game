import {combineReducers} from 'redux';

import categories from '~/modules/Categories/store/ducks/categories';
import questions from '~/modules/Questions/store/ducks/questions';
import user from './user';

export default combineReducers({categories, questions, user});
