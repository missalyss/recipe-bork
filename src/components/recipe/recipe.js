import React from 'react';
import { isEmpty } from "lodash";
import Ingredients from './ingredients';

const Recipe = ({ recipe: { title, ingredients, directions, tempTimeYield, credit, dearAlyssa } }) => {
  const includeDearAlyssa = !isEmpty(dearAlyssa);
  const titlea = title.toLowerCase()
  const id = titlea.replace(/\s+/g, '-');

  const directionsOrderedList = (
    <ol className="directionsForOL">
      {directions.map((direction, index) => {
        return (<li className='direction-li' key={index}>
          {direction}
        </li>)
      })}
    </ol>
  )

  const creditDue = credit && credit.text && (
    <p className={`xs-font ${includeDearAlyssa ? 'pt4' : ''}`}>Thank you, {credit.url ? (<a className="text-blue" href={credit.url}>{credit.text}</a>) : credit.text} for this recipe!</p>
  )

  return (
    <div className='container recipe-container bg-cream' id={id}>
      <h1 className='text-soft-black r-title'>
        {title.toUpperCase()}
      </h1>
      {tempTimeYield && (<p>{tempTimeYield}</p>)}
      <Ingredients ingredients={ingredients} />
      {directions[1] ? directionsOrderedList : (
        <p className='singleDirections'>{directions[0]}</p>
      )}
      {includeDearAlyssa && (
        <div className="text-left mt4 text-red sm-font pl2 pr2">
          <p><em>Dear Alyssa,</em></p>
          {dearAlyssa.map((paragraph, i) =>
            (<p key={i}><em>{paragraph}</em></p>))}
          <p><em>Love, Alyssa</em></p>
        </div>
      )}
      {creditDue}
      <a href='#' className="scroll-link text-blue">Scroll to top</a>
    </div>
  );
}

export default Recipe;
