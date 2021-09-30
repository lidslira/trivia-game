import {all, takeLatest, call, put} from 'redux-saga/effects';

import {showCategories} from '~/shared/services/categories';

import {CategoriesTypes} from './types';

import {
  showCategoriesListSuccessAction,
  showCategoriesListErrorAction,
} from './actions';

export interface ResponseGenerator {
  trivia_categories: any;
  status: number;
}

function* showCategoriesSagas() {
  try {
    const response: ResponseGenerator = yield call(showCategories);

    if (response.status >= 200 && response.status < 300) {
      yield put(showCategoriesListSuccessAction(response.trivia_categories));
    } else {
      yield put(showCategoriesListErrorAction());
    }
  } catch {
    yield put(showCategoriesListErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(CategoriesTypes.SHOW_CATEGORIES_LIST, showCategoriesSagas),
  ]);
}
