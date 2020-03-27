import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { AppContext } from '~/store';

import vamosAjudarImg from '~/assets/vamos-ajudar.png';

import * as S from './styles';

export default function Login() {
  const { inputId, setInputId, handleLogin } = useContext(AppContext);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>#VamosAjudar</S.Title>
          <S.Subtitle>Faça seu login</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleLogin}>
          <S.Input
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder="Sua ID"
            autoFocus
          />
          <S.Button type="submit">Entrar</S.Button>

          <S.CustomLink to="/register">
            <FiLogIn size={16} color="#424874" />
            Não tenho cadastro
          </S.CustomLink>
        </S.Form>
      </S.Wrapper>

      <img src={vamosAjudarImg} alt="Vamos Ajudar" />
    </S.Container>
  );
}
