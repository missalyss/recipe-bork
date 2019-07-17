// fetch('https://api.funtranslations.com/translate/chef.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data) // Prints result from `response.json()` in getRequest
//   })
//   .catch(error => console.error(error))


postRequest('https://api.funtranslations.com/translate/chef.json', { text: 'Krunal' })
  .then(data => console.log(data)) // Result from the `response.json()` call
  .catch(error => console.error(error))

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  });
  .then(response => response.json())
}