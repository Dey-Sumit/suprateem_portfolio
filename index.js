//import the module
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//listen to a PORT
app.listen(port, () => console.log("listening on 3000"));

app.get('/', function (req, res) {
  res.sendFile('public/index_up.html', {
    root: __dirname
  })
});

app.use(express.static('public'));