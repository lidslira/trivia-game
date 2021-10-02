import {all, fork} from 'redux-saga/effects';
import categories from '~/modules/Categories/store/ducks/categories/sagas';
import questions from '~/modules/Questions/store/ducks/questions/sagas';

export default function* rootSaga() {
  yield all([fork(categories), fork(questions)]);
}
