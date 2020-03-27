import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [inputId, setInputId] = useState('');
  const [ongId, setOngId] = useState('');
  const [ongName, setOngName] = useState('');

  function handleReset() {
    setInputId('');
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (inputId.trim() === '') {
        toast.error('Oops... Você precisa informar o ID!');
        return;
      }

      const response = await api.post('/sessions', { id: inputId });

      localStorage.setItem('ongId', inputId);
      localStorage.setItem('ongName', response.data.name);

      setOngId(inputId);
      setOngName(response.data.name);

      handleReset();

      history.push('/profile');
    } catch (error) {
      toast.error('Oops... Veja se o ID está correto!');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  useEffect(() => {
    setOngId(localStorage.getItem('ongId'));
    setOngName(localStorage.getItem('ongName'));
  }, []);

  return (
    <AppContext.Provider
      value={{
        inputId,
        setInputId,
        ongId,
        ongName,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
