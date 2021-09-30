import {action} from 'typesafe-actions';
import {Category} from '~/dtos';

import {
  CategoriesTypes,
  ShowCategoriesListProps,
  ShowCategoriesListSuccessProps,
  ShowCategoriesListErrorProps,
  GetCategoryProps,
  GetCategorySuccessProps,
  GetCategoryErrorProps,
} from './types';

export const showCategoriesListAction = (): ShowCategoriesListProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST);

export const showCategoriesListSuccessAction = (
  categoriesList: Category,
): ShowCategoriesListSuccessProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST_SUCCESS, {categoriesList});

export const showCategoriesListErrorAction = (): ShowCategoriesListErrorProps =>
  action(CategoriesTypes.SHOW_CATEGORIES_LIST_ERROR);

/*
export const getCategoryAction = (id: number): GetCategoryProps =>
  action(CategoriesTypes.GET_CATEGORY, {id});

export const getCategorySuccessAction = (
  category: Category,
): GetCategorySuccessProps =>
  action(CategoriesTypes.GET_CATEGORY_SUCCESS, {category});

export const getCategoryErrorAction = (): GetCategoryErrorProps =>
  action(CategoriesTypes.GET_CATEGORY_ERROR);
*/
