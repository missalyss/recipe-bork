import React from 'react';
import data from '../data.js';
import './styles/nav.css';

const Nav = () => {
  const recipes = Object.values(data);

  const list = recipes.map((recipe, index) => {
    const { title } = recipe;
    const id = title.replace(/\s+/g, '-').toLowerCase();
    return (
      <li className='nav-li' key={index} >
        <a className='link' href={`#${id}`}>{title.toUpperCase()}</a>
      </li>
    )
  });
  return (
    <ul className='nav-ul'>
      {list}
    </ul>
  )
}

export default Nav;
