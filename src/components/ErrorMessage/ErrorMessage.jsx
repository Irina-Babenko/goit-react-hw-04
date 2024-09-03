import React from 'react';
import PropTypes from 'prop-types';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={css.erorContainer}>
      <p className={css.errorMessageessage}>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
