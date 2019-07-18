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
const Recipe = ({ recipe: { title, ingredients, directions } }) => {
  const titlea = title.toLowerCase()
  const id = titlea.replace(/\s+/g, '-');

  return (
    <div className='container bg-cream'>
      <h1 className='text-soft-black r-title' id={id}>
        {title}
      </h1>
      <Ingredients ingredients={ingredients} />
      <p className='directions'>
        {directions}
      </p>
    </div>
  );
}

export default Recipe;
