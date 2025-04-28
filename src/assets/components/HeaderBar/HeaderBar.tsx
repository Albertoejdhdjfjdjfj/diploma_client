import React from 'react';
import logo from '../../images/logo.png';
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className="header_bar">
      <a translate="no">
        Mafia
        <img alt="logo" src={logo} />
      </a>
    </div>
  );
};

export default HeaderBar;
