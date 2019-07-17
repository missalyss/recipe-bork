import React from 'react';
import data from '../data.js';
// import { url } from 'inspector';

const Nav = () => {
  console.log('navvv');
  const recipes = Object.values(data);

  const list = recipes.map((recipe, index) => {
    const { title } = recipe;
    const id = title.replace(/\s+/g, '-').toLowerCase();
    return (
      <li id={id} key={index} >
        <a href={`#${id}`}>{title}</a>
      </li>
    )
  });
  return (
    <ul>
      {list}
    </ul>
  )
}

export default Nav;
