import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './mainpage.scss';
import logo from '../assets/logo_home.png';

import { getTokens } from '../../store/actions';

export const MainPage = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);

  const paramsToObject = Object.fromEntries([...url.searchParams]);

  useEffect(() => {
    dispatch(getTokens(paramsToObject));
  }, [paramsToObject]);

  return (
    <main className="wrapper">
      <section className="greeting-info">
        <h1 className="greeting-info__title">
          Добро пожаловать на сайт вуза будущего
        </h1>
        <p className="greeting-info__subtitle-about">
          Смотрите актуальные новости в разделе: О нас
        </p>
        <p className="greeting-info__subtitle-entrant">
          Что бы узнать всё о поступлении зайдите в раздел абитуриенту
        </p>
        <p className="greeting-info__subtitle-schedule">
          Зайдите в раздел студенту чтобы узнать рассписание
        </p>
      </section>
      <img className="wrapper__img" src={logo} alt="logo" />
    </main>
  );
};
