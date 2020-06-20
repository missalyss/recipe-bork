import React from 'react';
import Ingredients from './ingredients';

const Recipe = ({ recipe: { title, ingredients, directions, tempTimeYield, credit, dearAlyssa } }) => {
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
      {dearAlyssa && (
        <div className="text-left mt4 text-red sm-font">
          <p><em>Dear Alyssa,</em></p>
            {dearAlyssa.map((paragraph, i) =>
            (<p key={i}><em>{paragraph}</em></p>))}
          <p><em>Love, Alyssa</em></p>
        </div>
      )}
      {credit && (<p className={`xs-font ${dearAlyssa ? 'pt4' : ''}`}>Thank you, {credit} for this recipe!</p>)}


    <a href='#' className="scroll-link text-blue">Scroll to top</a>
    </div>
  );
}

export default Recipe;
