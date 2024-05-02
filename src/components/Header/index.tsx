import React from 'react';
import "./style.css"
import { Link } from '';

const Header = () => {
  return (
    <div>
        <header className="panificadora-header">
        <h1 className="header-title">PANIFICADORA ROGER</h1>
        <h2 className="header-subtitle">Os melhores pães estão aqui</h2>
        <ul className="header-nav">
          <li><a href='/contato'>Contato</a></li>
          <li><a href='/sobre'>Sobre</a></li>
          <li><a href='/produtos'>Produtos</a></li>
          <li><a href='.'>Home</a></li>
        </ul>
        </header>
    </div>
  );
};

export default Header;
