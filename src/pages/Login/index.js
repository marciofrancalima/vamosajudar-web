import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiLogIn } from 'react-icons/fi';

import api from '~/services/api';

import vamosAjudarImg from '~/assets/vamos-ajudar.png';

import * as S from './styles';

export default function Login() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      toast.error('Oops... Veja se o ID está correto!');
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>#VamosAjudar</S.Title>
          <S.Subtitle>Faça seu login</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleLogin}>
          <S.Input
            value={id}
            onChange={(e) => setId(e.target.value)}
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
