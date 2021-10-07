import React from 'react';
import * as S from './styles';

interface ModalAnswerProps {
  closeModal: () => void;
  message: string;
  buttonText: string;
  isItRight: boolean;
}

const ModalAnswers: React.FC<ModalAnswerProps> = ({
  message,
  isItRight,
  buttonText,
  closeModal,
}) => (
  <S.Container onPress={() => closeModal()}>
    <S.Main>
      <S.Title> {message} </S.Title>
      <S.Button onPress={() => closeModal()}>
        <S.ButtonText isItRight={isItRight}> {buttonText}</S.ButtonText>
      </S.Button>
    </S.Main>
  </S.Container>
);

export default ModalAnswers;
