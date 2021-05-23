import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import './TopBar.scss';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

export const TopBar = () => {
  const user = useSelector((state) => state.signInUserState.user);
  const [displayingName, setDisplayingName] = useState('');

  useEffect(() => {
    const objectForName = { ...user.displayName.split(' ') };
    const fullName = {
      lastName: objectForName[0],
      firstName: objectForName?.[1]?.[0],
      fatherName: objectForName?.[2]?.[0],
    };
    setDisplayingName(`${fullName.lastName} ${fullName.firstName}. ${fullName.fatherName}.`);
  }, [user]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Link to="/">
            <img src={logo} alt="logo" className="top-bar__logo" />
          </Link>
          <nav className="tool-bar-nav">
            <ul className="tool-bar-nav-list">
              <li className="tool-bar-nav__student">
                <Link to="/student">Студенту</Link>
              </li>
              <li className="tool-bar-nav__entrant">
                <Link to="/entrant">Абитуриенту</Link>
              </li>
              <li className="tool-bar-nav__about-us">
                <Link to="/about-us">О нас</Link>
              </li>
              {user.displayName
                ? (
                  <li className="tool-bar-nav__student">
                    <Link to="/personalPage">{displayingName}</Link>
                  </li>
                )
                : (
                  <li className="tool-bar-nav__authorization">
                    <Link to="/authorization">Авторизация</Link>
                  </li>
                )}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};
