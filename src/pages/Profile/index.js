import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Header from '~/components/Header';

import * as S from './styles';

export default function Profile() {
  return (
    <S.Container>
      <Header />

      <S.Title>Casos cadastrados</S.Title>

      <S.List>
        <S.Item>
          <S.Name>CASO:</S.Name>
          <S.Paragraph>Caso teste</S.Paragraph>

          <S.Description>DESCRIÇÃO:</S.Description>
          <S.Paragraph>Descrição teste</S.Paragraph>

          <S.Value>VALOR:</S.Value>
          <S.Paragraph>R$ 120,00</S.Paragraph>

          <S.DeleteButton type="button">
            <FiTrash2 size={20} />
          </S.DeleteButton>
        </S.Item>
        <S.Item>
          <S.Name>CASO:</S.Name>
          <S.Paragraph>Caso teste</S.Paragraph>

          <S.Description>DESCRIÇÃO:</S.Description>
          <S.Paragraph>Descrição teste</S.Paragraph>

          <S.Value>VALOR:</S.Value>
          <S.Paragraph>R$ 120,00</S.Paragraph>

          <S.DeleteButton type="button">
            <FiTrash2 size={20} />
          </S.DeleteButton>
        </S.Item>
        <S.Item>
          <S.Name>CASO:</S.Name>
          <S.Paragraph>Caso teste</S.Paragraph>

          <S.Description>DESCRIÇÃO:</S.Description>
          <S.Paragraph>Descrição teste</S.Paragraph>

          <S.Value>VALOR:</S.Value>
          <S.Paragraph>R$ 120,00</S.Paragraph>

          <S.DeleteButton type="button">
            <FiTrash2 size={20} />
          </S.DeleteButton>
        </S.Item>
        <S.Item>
          <S.Name>CASO:</S.Name>
          <S.Paragraph>Caso teste</S.Paragraph>

          <S.Description>DESCRIÇÃO:</S.Description>
          <S.Paragraph>Descrição teste</S.Paragraph>

          <S.Value>VALOR:</S.Value>
          <S.Paragraph>R$ 120,00</S.Paragraph>

          <S.DeleteButton type="button">
            <FiTrash2 size={20} />
          </S.DeleteButton>
        </S.Item>
      </S.List>
    </S.Container>
  );
}
