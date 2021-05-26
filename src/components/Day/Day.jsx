import React from 'react';
import './day.scss';
import sfu from '../assets/sfu.png';

export const Day = () => (
  <div className="day-container">
    <p className="day-container__title">Анонс даты</p>
    <img className="day-container__img" src={sfu} alt="SFU" />
  </div>
);
