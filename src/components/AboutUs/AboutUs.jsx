import React from 'react';
import './aboutus.scss';
import sfedu from '../assets/sfedu.png';
import Mask from '../assets/Mask.png';
import nasa from '../assets/nasa.png';
import tex from '../assets/tex.png';

export const AboutUs = () => (
  <div className="about-us">
    <div className="about-us__column-one">
      <div className="news-one">
        <img className="news-one__img" src={sfedu} alt="sfedu" />
        <p className="news-one__title">
          ЮФУ занял первое место в рейтинге ведущих университетов мира!
        </p>
      </div>
      <div className="news-two">
        <img className="news-two__img" src={Mask} alt="Mask" />
        <p className="news-two__title">
          Илон Маск сдал ЕГЭ и теперь хочет поступить в юфу
        </p>
      </div>
    </div>
    <div className="about-us__column-two">
      <div className="news-three">
        <img className="news-three__img" src={nasa} alt="nasa" />
        <p className="news-three__title">
          NASA подписали договор о сотрудничестве с ЮФУ
        </p>
      </div>
      <div className="news-four">
        <img className="news-four__img" src={tex} alt="tex" />
        <p className="news-four__title">
          Юфу стал самым пропрывным вузом в мире в сфере нано технологий
        </p>
      </div>
    </div>
  </div>
);
