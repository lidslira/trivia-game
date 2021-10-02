import {Reducer} from 'redux';
import {CategoriesTypes, CategoriesState} from './types';

const INITIAL_STATE: CategoriesState = {
  loading: false,
  categoriesList: [],
  category: {
    id: 0,
    name: '',
  },
};

const reducer: Reducer<CategoriesState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case CategoriesTypes.SHOW_CATEGORIES_LIST:
      return {
        ...state,
        loading: true,
      };

    case CategoriesTypes.SHOW_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriesList: payload.categoriesList,
        categoryHasError: false,
      };

    case CategoriesTypes.SHOW_CATEGORIES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        categoryHasError: true,
      };

    default:
      return state;
  }
};

export default reducer;
