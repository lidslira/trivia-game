import React from 'react';
import * as S from './styles';

interface ModalAnswerProps {
  closeModal: () => void;
  message: string;
}

const ModalAnswers: React.FC<ModalAnswerProps> = ({message, closeModal}) => (
  <S.Container onPress={() => closeModal()}>
    <S.Main>
      <S.Title> {message} </S.Title>
      <S.Button onPress={() => closeModal()}>
        <S.ButtonText> Next question </S.ButtonText>
      </S.Button>
    </S.Main>
  </S.Container>
);

export default ModalAnswers;
