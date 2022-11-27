const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.set('x-powered-by', false);
app.use(bodyParser.json());

app.post("/bff/signin", (req, res, next) => {
  console.log('req: ', req.body);
  if (req?.body?.pw) {
    res.json({ status: 200, message: "Hello from server!", body: req.body })
  } else {
    res.json({ status: 400, message: "Womp womp" })
  }
 next()
});

app.listen(PORT, () => {
  console.log(
    `==================== Server listening on ${PORT} ====================`
  );
});

// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
//
//
// app.get('/', (req, res) => {
// THIS DOESN'T WORK BUT OH WELL.
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.get('/ping', (req, res) => {
//  return res.send('pong');
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
//     headers: new Heros({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json())
//   .catch(err => console.error('RED ALERT: ', err))
// }
