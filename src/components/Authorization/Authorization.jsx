import React from 'react';
import './authorization.scss';
import {
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import logo from '../assets/logo_autorization.png';

export const Authorization = () => {
  const onSubmit = (values) => {
    const { email } = values;
    window.location.href = `${process.env.REACT_APP_BACK_URL}`
      + `/api/v1/oauth2/authorization/azure/?login_hint=${email}`;
  };

  const validate = (values) => {
    const errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  return (
    <main className="authorization-main">
      <img className="authorization-main__logo" src={logo} alt="logo" />
      <section className="form-wrapper">
        <p className="form-wrapper__title">Войдите в систему.</p>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({
            handleSubmit, form, submitting,
          }) => (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <TextField
                label="login@sfedu.ru"
                name="email"
                margin="none"
                variant="outlined"
                className="form__input"
                required
              />
              <Button
                className="form__button"
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Sign In
              </Button>
            </form>
          )}
        />
        <Typography>
          Техническая поддержка:
          {' '}
          <Link target="_blank" href="https://sfedu.ru/www/stat_pages22.show?p=ELS/inf/D&x=ELS/-4007">
            support@sfedu.ru
          </Link>
        </Typography>
      </section>
    </main>
  );
};
