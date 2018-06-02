import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="expenses">Expenses</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
