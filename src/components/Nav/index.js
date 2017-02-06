import React from 'react';
import { Link } from 'react-router';
import styles from './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list__item"><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;
