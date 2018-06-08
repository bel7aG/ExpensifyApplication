import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav-bar">
      <ul className="list-items">
        <li className="list-item">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/create">Create Expense</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="help">Help</NavLink>
        </li>
      </ul>
    </nav>

  </header>
);

export default Header;
