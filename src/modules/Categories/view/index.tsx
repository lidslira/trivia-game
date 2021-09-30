import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useDispatch, useSelector} from 'react-redux';
import * as S from './styles';

import {QUESTIONS} from '~/shared/constants/routes';
import {ApplicationState} from '~/shared/store';
import {showCategoriesListAction} from '~/modules/Categories/store/ducks/categories/actions';

const Categories: React.FC = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const {categoriesList} = useSelector(
    (state: ApplicationState) => state.categories,
  );

  const showCategories = () => {
    dispatch(showCategoriesListAction());
  };
  return (
    <S.Container>
      <S.CategoryCard onPress={() => showCategories()}>
        <S.CategoryName> Category 1</S.CategoryName>
      </S.CategoryCard>
      <S.CategoryCard>
        <S.CategoryName> Category 2</S.CategoryName>
      </S.CategoryCard>
      <S.CategoryCard>
        <S.CategoryName> Category 3 </S.CategoryName>
      </S.CategoryCard>
    </S.Container>
  );
};
export default Categories;
