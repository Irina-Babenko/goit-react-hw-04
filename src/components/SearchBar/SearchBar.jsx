import React from 'react';
import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast.error('Enter a query before!');
      return;
    }
    onSearch(values.query.trim());
    actions.resetForm();
  };

  return (
    <header className={css.container}>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={css.wrapper}>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.input}
            />

            <Toaster position="top-right" reverseOrder={false} />

            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
