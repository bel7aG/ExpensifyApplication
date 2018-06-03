import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="list-items">
        <li className="list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="expenses">Expenses</NavLink>
        </li>
      </ul>
    </nav>

  </header>
);

export default Header;
