import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import history from './services/history';

import Routes from '~/routes';

import AppProvider from './store';

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable={false}
        />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}

export default App;
