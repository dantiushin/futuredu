import React from 'react';
import './hostel.scss';
import palace from '../assets/palace.png';
import interior from '../assets/interior.png';

export const Hostel = () => (
  <div className="hostel-wrapper">
    <img className="hostel-wrapper__palace" src={palace} alt="palace" />
    <img className="hostel-wrapper__interior" src={interior} alt="interior" />
    <p className="hostel-wrapper__title">
      В каждом городе, где расположены филиалы ЮФУ, имеется не менее 10 общежитий.
      Каждая из них вмещает в себя до 200 человек(от 2 до 5 в комнате),
      а также оснащена всеми удобствами. Косметический ремонт производится каждые 5 лет.
    </p>
  </div>
);
