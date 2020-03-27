import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
