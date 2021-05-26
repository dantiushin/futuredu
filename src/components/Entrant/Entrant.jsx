import React from 'react';
import { Link } from 'react-router-dom';
import './entrant.scss';
import star from '../assets/star.png';

export const Entrant = () => (
  <div className="entrant-wrapper">
    <img className="entrant-wrapper__star" src={star} alt="star" />
    <Link href="/" className="link entrant-wrapper__admission">поступление</Link>
    <Link to="/hostel" className="link entrant-wrapper__hostel">общежитие </Link>
    <Link href="/" className="link entrant-wrapper__rules">правила приема</Link>
    <Link to="/day" className="link entrant-wrapper__day">дни открытых дверей</Link>
    <Link to="/calculator" className="link entrant-wrapper__calc">калькулятор ЕГЭ</Link>
  </div>
);
