import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import './TopBar.scss';
import logo from '../assets/logo.png';

export const TopBar = () => (
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
            <li className="tool-bar-nav__authorization">
              <Link to="/authorization">Авторизация</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  </>
);
