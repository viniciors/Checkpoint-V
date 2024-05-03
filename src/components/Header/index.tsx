import React from 'react';
import "./style.css"

const Header = () => {
  return (
    <div>
        <header className="panificadora-header">
        <h1 className="header-title">PANIFICADORA ROGER</h1>
        <h2 className="header-subtitle">Os melhores pães estão aqui</h2>
        <ul className="header-nav">
          <li><a href='.'>HOME</a></li>
          <li><a href='/sobre'>SOBRE</a></li>
          <li><a href='/produtos'>PRODUTOS</a></li>
          <li><a href='/contato'>CONTATO</a></li>
        </ul>
        </header>
    </div>
  );
};

export default Header;
