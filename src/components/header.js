import React from 'react';
import headerImage from '../images/cherf.jpg'
import './styles/header.css';

const Header = () => {
  return (
    <div className="flex">
      <img
        className="banner"
        src={headerImage}
        alt="head chef banner"
      />
      <h1 className="heading-text text-cream">
        The Helgabones Family Recipe Bork
    </h1>
    </div>
  );
}

export default Header;
