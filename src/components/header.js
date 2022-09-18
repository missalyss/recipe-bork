import React from 'react';
import headerImage from '../images/cherf.jpg'
import './styles/header.css';

const Header = ({ isBorked }) => {
  const fetchAlyssa = () => {
console.log('FETCHED: ', );
  fetch('/lou')
  .then(response => response.json())
  }
  return (
    <>
        <button  onClick={() => fetchAlyssa()}>CLICK ME</button>
    <a href="/">
      <div className="flex justify-center align-center height-100">
        <img
          className="banner"
          src={headerImage}
          alt="head chef banner"
          />
        <h1 className={`heading-text text-cream pl2 pr2 ${isBorked ? 'borked-text' : ''}`}>
          {isBorked ? "Zee-a Helgeburnes Femeely Receepe-a Börk" : "The Helgabones Family Recipe Börk"}
        </h1>
      </div>
    </a>
          </>
  );
}

export default Header;
