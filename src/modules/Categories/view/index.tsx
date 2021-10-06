import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {Category} from '~/dtos';

import * as S from './styles';

import {QUESTIONS} from '~/shared/constants/routes';

import {ApplicationState} from '~/shared/store';
import {getQuestionsAction} from '~/modules/Questions/store/ducks/questions/actions';
import {showCategoriesListAction} from '../store/ducks/categories/actions';

const Categories: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {categoriesList} = useSelector(
    (state: ApplicationState) => state.categories,
  );

  useEffect(() => {
    dispatch(showCategoriesListAction());
  }, [dispatch]);

  const goToQuestions = (category: Category) => {
    dispatch(getQuestionsAction(category.id, 'easy'));
    navigation.navigate(QUESTIONS);
  };

  const renderItem = ({item}: any) => (
    <S.ListContainer>
      <S.CategoryCard onPress={() => goToQuestions(item)}>
        <S.CategoryName> {item.name} </S.CategoryName>
      </S.CategoryCard>
    </S.ListContainer>
  );
  return (
    <S.Container>
      <S.Title>
        <S.TextTitle> TRIVIA GAME </S.TextTitle>
      </S.Title>
      <S.CategoryName> Escolha uma categoria: </S.CategoryName>
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
