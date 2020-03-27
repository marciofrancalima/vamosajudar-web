import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

export default function defaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

defaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
