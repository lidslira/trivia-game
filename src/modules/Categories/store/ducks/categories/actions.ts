import {action} from 'typesafe-actions';
import {Category} from '~/dtos';

import {
  CategoriesTypes,
  ShowCategoriesListProps,
  ShowCategoriesListSuccessProps,
  ShowCategoriesListErrorProps,
} from './types';

export const showCategoriesListAction = (): ShowCategoriesListProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST);

export const showCategoriesListSuccessAction = (
  categoriesList: Category,
): ShowCategoriesListSuccessProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST_SUCCESS, {categoriesList});

export const showCategoriesListErrorAction = (): ShowCategoriesListErrorProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST_ERROR);
