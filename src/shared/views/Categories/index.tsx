import React from 'react';
import {useNavigation} from '@react-navigation/core';

import * as S from './styles';

import {QUESTIONS} from '~/shared/constants/routes';

const Categories: React.FC = () => {
  const navigation = useNavigation();

  const handleGoQuestion = () => {
    navigation.navigate(QUESTIONS);
  };
  return (
    <S.Container>
      <S.CategoryCard onPress={() => handleGoQuestion()}>
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
