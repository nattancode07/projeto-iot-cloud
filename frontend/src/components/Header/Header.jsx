// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Gerenciador de Despesas</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Registrar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
