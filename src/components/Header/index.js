import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import * as S from './styles';

export default function Profile() {
  const [ongName, setOngName] = useState('');

  const history = useHistory();

  useEffect(() => {
    const name = localStorage.getItem('ongName');

    if (name) {
      setOngName(name);
    } else {
      history.push('/');
    }
  }, [history]);

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
          <S.LogoutButton type="button">
            <FiPower size={18} color="#e02041" />
          </S.LogoutButton>
        </S.Wrapper>
      </S.Header>
    </S.Container>
  );
}
