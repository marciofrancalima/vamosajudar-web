import React, { useContext } from 'react';
import { FiPower } from 'react-icons/fi';

import { AppContext } from '~/store';

import * as S from './styles';

export default function Profile() {
  const { handleLogout, ongName } = useContext(AppContext);

  return (
    <S.Container>
      <S.Header>
        <S.Wrapper>
          <S.Logo>#VamosAjudar</S.Logo>
          <S.WelcomeMessage>
            Bem vindo, &nbsp;
            {ongName}
          </S.WelcomeMessage>
        </S.Wrapper>

        <S.Wrapper>
          <S.AddButton to="/incidents/new">Cadastrar</S.AddButton>
          <S.LogoutButton type="button" onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </S.LogoutButton>
        </S.Wrapper>
      </S.Header>
    </S.Container>
  );
}
