import React from 'react';
import { FiPower } from 'react-icons/fi';

import * as S from './styles';

export default function Profile() {
  return (
    <S.Container>
      <S.Header>
        <S.Wrapper>
          <S.Logo>#VamosAjudar</S.Logo>
          <S.WelcomeMessage>Bem vindo, APAD</S.WelcomeMessage>
        </S.Wrapper>

        <S.Wrapper>
          <S.AddButton to="/incidents/new">Cadastrar</S.AddButton>
          <S.LogoutButton type="button">
            <FiPower size={18} color="#e02041" />
          </S.LogoutButton>
        </S.Wrapper>
      </S.Header>
    </S.Container>
  );
}
