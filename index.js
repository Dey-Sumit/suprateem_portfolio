//import the module
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//listen to a PORT
app.listen(port, () => console.log("listening on 3000"));

app.get('/', function(req, res) {
  res.sendFile('public/index_up.html', {
    root: __dirname
  })
});

app.use(express.static('public'));
// 
// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// // Parses the body for POST, PUT, DELETE, etc.
// app.use(bodyParser.json());
//
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//
// // Access the parse results as request.body
// app.post('/', function(request, response) {
//   console.log("got it");
//   name = request.body.name;
//   email = request.body.email;
//   message = request.body.message;
//   // console.log(request.body.user.email);
//   add_data(name, email, message);
//   response.sendFile('public/index_up.html', {
//     root: __dirname
//   })
//
// });