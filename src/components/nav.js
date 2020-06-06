import React from 'react';
import data from '../data.js';
import alphadividerUtil from './util/alphadivider';
import './styles/nav.css';

const Nav = ({ recipes }) => {
  const alphabet = alphadividerUtil({recipes, withRecipe: false});
  const list = alphabet.map((letter, index) => {
  //  TODO: Check length of alphabet and adjust CSS so mobile nav isn't too cramped.
    return (
      <li className='nav-li' key={index} >
        <a className='link' href={`#${letter}`}>{letter.toUpperCase()}</a>
      </li>
    )
  });

  return (
    <ul className='nav-ul flex'>
      {list}
    </ul>
  )
}

export default Nav;
