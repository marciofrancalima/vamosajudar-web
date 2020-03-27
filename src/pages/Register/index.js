import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';

export default function Register() {
  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <S.Title>#VamosAjudar</S.Title>
          <S.Subtitle>Cadastro</S.Subtitle>
          <S.Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Description>
          <S.CustomLink to="/">
            <FiArrowLeft size={16} color="#424874" />
            Já tenho cadastro
          </S.CustomLink>
        </S.Wrapper>

        <S.Form>
          <S.Input placeholder="Nome da ONG" autoFocus />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input placeholder="WhatsApp" />

          <S.InputGroup>
            <S.Input placeholder="Cidade" />
            <S.Input placeholder="UF" style={{ width: '20%' }} />
          </S.InputGroup>

          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
