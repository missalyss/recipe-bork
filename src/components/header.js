import React from 'react';
import headerImage from '../images/cherf.jpg'
import './styles/header.css';

const Header = ({isBorked}) => {
  return (
    <a href="/">
      <div className="flex justify-center align-center height-100">
          <img
            className="banner"
            src={headerImage}
            alt="head chef banner"
          />
          <h1 className="heading-text text-cream">
            { isBorked ? "Zee-a Helgeburnes Femeely Receepe-a Börk" : "The Helgabones Family Recipe Börk" }
        </h1>
      </div>
    </a>
  );
}

export default Header;
