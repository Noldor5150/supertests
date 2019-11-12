import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <nav className="Header--navigation">
        <NavLink exact className="Header--navigation-item" to="/">
          Home
        </NavLink>
        <NavLink exact className="Header--navigation-item" to="/products">
          List
        </NavLink>
        <NavLink exact className="Header--navigation-item" to="/products/create">
          Create
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
