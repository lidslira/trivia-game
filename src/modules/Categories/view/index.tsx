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

  const renderItem = ({item}: any) => (
    <S.ListContainer>
      <S.CategoryCard>
        <S.CategoryName> {item.name} </S.CategoryName>
      </S.CategoryCard>
    </S.ListContainer>
  );
  return (
    <S.Container>
      <S.Title>
        <S.TextTitle> ESCOLHA UMA CATEGORIA: </S.TextTitle>
      </S.Title>
      <S.List
        data={categoriesList}
        extraData={categoriesList}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default Categories;
