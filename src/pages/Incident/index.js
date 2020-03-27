import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';

export default function Incident() {
  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <S.Logo>#VamosAjudar</S.Logo>
          <S.Subtitle>Cadastrar novo caso</S.Subtitle>
          <S.Description>
            Descreva o caso com detalhes para encontrar alguém com bom coração
            para lhe ajudar.
          </S.Description>
          <S.CustomLink to="/profile">
            <FiArrowLeft size={16} color="#424874" />
            Voltar para página inicial
          </S.CustomLink>
        </S.Wrapper>

        <S.Form>
          <S.Input placeholder="Título do caso" autoFocus />
          <S.TextArea placeholder="Descrição" />
          <S.Input placeholder="Valor em reais" />

          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
