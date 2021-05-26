import React from 'react';
import './student.scss';
import {
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';

export const Student = () => {
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
    <div className="student-page-wrapper">
      <div className="schedule">
        <div className="schedule-info ">
          <h1 className="schedule-info__title">Расписание занятий</h1>
          <p className="schedule-info__description">Введите название группы, ФИО преподавателя или номер аудитории</p>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({
            handleSubmit, form, submitting,
          }) => (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <TextField
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
                ПОИСК
              </Button>
            </form>
          )}
        />
      </div>
      <div className="performance">
        <div className="performance-info ">
          <h1 className="performance-info__title">Успеваемость</h1>
          <p className="performance-info__description">Введите ФИО и курс</p>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({
            handleSubmit, form, submitting,
          }) => (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <TextField
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
                ПОИСК
              </Button>
            </form>
          )}
        />
      </div>
    </div>
  );
};
