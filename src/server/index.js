// THIS IS A SAMPLE SERVER. NPM I --SAVE EXPRESS AND NODEMON IF YOU END UP NEEDING A SERVER.
// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/ping', (req, res) => {
//  return res.send('pong');
// });
//
// app.get('/', (req, res) => {
  // THIS DOESN'T WORK BUT OH WELL.
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listening on port ${port}`));

// NOT FUNCTIONING POST.
// app.post('https://api.funtranslations.com/translate/chef.json?text=today we will have soup', (req, res) => {
//     console.log('req dot body! ', req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// })


// THIS IS A CLIENTSIDE FETCH
// fetch('https://api.funtranslations.com/translate/chef.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data) // Prints result from `response.json()` in getRequest
//   })
//   .catch(error => console.error(error))

// THIS ALSO IS PROBABLY A CLIENTSIDE FETCH
// const postRequest = ( { url ='https://api.funtranslations.com/translate/chef.json', text = 'Hello we are going to make soup today' }) => {
//   return fetch(url, {
//     credentials: 'same-origin', // 'include', default: 'omit'
//     method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//     body: JSON.stringify(text), // Coordinate the body type with 'Content-Type'
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json())
//   .catch(err => console.error('RED ALERT: ', err))
// }
