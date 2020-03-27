import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';
import history from '~/services/history';

import * as S from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function redirectToLogin() {
    setTimeout(() => {
      history.push('/');
    }, 10000);
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      whatsapp.trim() === '' ||
      city.trim() === '' ||
      uf.trim() === ''
    ) {
      toast.error('Oops... Preencha os campos corretamente!');
      return;
    }

    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post('/ongs', data);

      toast(`Cadastro realizado! Sua ID: ${response.data.id}`, {
        className: 'toast',
      });

      redirectToLogin();
    } catch (error) {
      toast.error('Oops... Erro ao cadastrar a ONG!');
    }
  }

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

        <S.Form onSubmit={handleRegister}>
          <S.Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
            autoFocus
          />
          <S.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <S.Input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />

          <S.InputGroup>
            <S.Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <S.Input
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
              maxLength="2"
              style={{ width: '20%', textTransform: 'uppercase' }}
            />
          </S.InputGroup>

          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
