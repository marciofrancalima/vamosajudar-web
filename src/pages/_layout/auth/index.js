import React from 'react';
import PropTypes from 'prop-types';

export default function authLayout({ children }) {
  return <>{children}</>;
}

authLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
