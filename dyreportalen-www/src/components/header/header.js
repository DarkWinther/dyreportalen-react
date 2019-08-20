import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

import logo from 'static/images/logo.png';
import logoText from 'static/images/logo-text.png';

export const Header = () => (
  <header className="header">
    <nav role="navigation">
      <NavLink className="logo" to="/">
          <img src={logo} alt="" />
          <img src={logoText} alt="" />
      </NavLink>
      <ul>
        <li><NavLink to="/forum">Forum</NavLink></li>
        <li><NavLink to="/inspiration">Inspiration</NavLink></li>
        <li><NavLink to="/annoncer">Annoncer</NavLink></li>
        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
        <li>
            <a className="profile-link" href="#">
              <i className="material-icons">person</i>
            </a>
        </li>
      </ul>
    </nav>
  </header>
);
