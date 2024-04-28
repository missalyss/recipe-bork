import React from "react";
import alphadividerUtil from "../util/alphadivider";
import "../styles/nav.css";

const AlphaNav = ({ recipes }) => {
  const alphabet = alphadividerUtil({ recipes, withRecipe: false });
  const list = alphabet.map((letter, index) => {
    //  TODO: Check length of alphabet and adjust CSS so mobile nav isn't too cramped.
    return (
      <li className="nav-li" key={index}>
        <a className="link p2" href={`#${letter}`}>
          {letter.toUpperCase()}
        </a>
      </li>
    );
  });

  return <ul className="nav-ul mt7 mb0 lg-width-66 flex flex-wrap">{list}</ul>;
};

export default AlphaNav;
