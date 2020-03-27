import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import { AppContext } from '~/store';

import api from '~/services/api';

import * as S from './styles';

export default function Incident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const { ongId } = useContext(AppContext);

  function handleReset() {
    setTitle('');
    setDescription('');
    setValue('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      value.trim() === ''
    ) {
      toast.error('Oops... Preencha os campos corretamente!');
      return;
    }

    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      toast(`Caso cadastrado com realizado!`, {
        className: 'toast',
      });

      handleReset();
    } catch (error) {
      toast.error('Oops... Erro ao cadastrar o caso!');
    }
  }

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

        <S.Form onSubmit={handleSubmit}>
          <S.Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
            autoFocus
          />
          <S.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <S.Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />

          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
