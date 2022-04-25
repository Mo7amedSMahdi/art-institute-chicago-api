import React from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const name = 'Mohammed';
  return (
    <div>
      <h1>{name}</h1>
      <img src={Logo} alt="brand logo" />
    </div>
  );
};

export default Header;
