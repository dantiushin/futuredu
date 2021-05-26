import React from 'react';
import './calculator.scss';

export const Calculator = () => {
  const firstColArr = ['Русский язык', 'Математика (профиль)', 'Литература', 'История', 'Немецкий язык'];
  const secondColArr = ['Испанский язык', 'География', 'Обществознание', 'Английский язык'];
  const thirdColArr = ['Информатика и ИКТ', 'Биология', 'Химия', 'Французский язык'];

  return (
    <>
      <div className="calculator-wrapper">
        <div className="first-column">
          {firstColArr.map((_) => (
            <div>
              <p className="first-column__class" key={Math.random()}>{_}</p>
              <input />
            </div>
          ))}
        </div>
        <div className="second-column">
          {secondColArr.map((_) => (
            <div>
              <p className="first-column__class" key={Math.random()}>{_}</p>
              <input />
            </div>
          ))}
        </div>
        <div className="third-column">
          {thirdColArr.map((_) => (
            <div>
              <p className="first-column__class" key={Math.random()}>{_}</p>
              <input />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="calculator-button"><span>Найти направление</span></button>
    </>
  );
};
