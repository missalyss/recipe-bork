import React from 'react';
import Ingredients from './ingredients';

const translateToBork = (deta) => {
  postRequest('https://api.funtranslations.com/translate/chef.json', { text: deta })
    .then(data => console.log(data)) // Result from the `response.json()` call
    .catch(error => console.error('red alert: ', error))

  function postRequest(url, data) {
    return fetch(url, {
      credentials: 'same-origin', // 'include', default: 'omit'
      method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Allow-Origin': '*',
        // 'Origin': 'https://api.funtranslations.com/',
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      }),
    })
      .then(response => response.json())
  }
}
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
        <div className="text-left mt4">
          <p><em>Dear Alyssa,</em></p>
          <p><em>{dearAlyssa}</em></p>
          <p><em>Love, Alyssa</em></p>
        </div>
      )}
      {credit && (<p className="small-font">Thank you, {credit} for this recipe!</p>)}


    <a href='#' className="scroll-link text-blue">Scroll to top</a>
    </div>
  );
}

export default Recipe;
