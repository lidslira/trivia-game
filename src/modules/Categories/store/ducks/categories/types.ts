import {Action} from 'redux';
import {Category} from '~/dtos';

export enum CategoriesTypes {
  SHOW_CATEGORIES_LIST = 'SHOW_CATEGORIES_LIST',
  SHOW_CATEGORIES_LIST_SUCCESS = 'SHOW_CATEGORIES_LIST_SUCCESS',
  SHOW_CATEGORIES_LIST_ERROR = 'SHOW_CATEGORIES_LIST_ERROR',
}

export interface CategoriesState {
  loading: boolean;
  categoriesList: [];
  category: Category;
}

export interface ShowCategoriesListProps extends Action {
  type: CategoriesTypes.SHOW_CATEGORIES_LIST;
}

export interface ShowCategoriesListSuccessProps extends Action {
  type: CategoriesTypes.SHOW_CATEGORIES_LIST_SUCCESS;
  payload: {categoriesList: Category};
}

export interface ShowCategoriesListErrorProps extends Action {
  type: CategoriesTypes.SHOW_CATEGORIES_LIST_ERROR;
}
