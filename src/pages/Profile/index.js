import React, { useState, useEffect, useMemo, useContext } from 'react';
import { toast } from 'react-toastify';
import { FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';

import { AppContext } from '~/store';

import * as S from './styles';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const { ongId } = useContext(AppContext);

  const listSize = useMemo(() => incidents.length, [incidents.length]);

  useEffect(() => {
    async function loadData() {
      if (ongId) {
        const response = await api.get('/profile', {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(response.data);
      }
    }

    loadData();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));

      toast('Caso excluído com sucesso!', {
        className: 'toast',
      });
    } catch (error) {
      toast.error('Oops... Erro ao excluir o caso!');
    }
  }

  return (
    <S.Container>
      <S.Title>Casos cadastrados</S.Title>

      {listSize !== 0 ? (
        <S.List>
          {incidents.map((incident) => (
            <S.Item key={incident.id}>
              <S.Name>CASO:</S.Name>
              <S.Paragraph>{incident.title}</S.Paragraph>

              <S.Description>DESCRIÇÃO:</S.Description>
              <S.Paragraph>{incident.description}</S.Paragraph>

              <S.Value>VALOR:</S.Value>
              <S.Paragraph>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </S.Paragraph>

              <S.DeleteButton
                type="button"
                onClick={() => handleDelete(incident.id)}
              >
                <FiTrash2 size={20} />
              </S.DeleteButton>
            </S.Item>
          ))}
        </S.List>
      ) : (
        <p>Lista vazia</p>
      )}
    </S.Container>
  );
}
