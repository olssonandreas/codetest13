var express = require('express');
var app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());


// serve static files from build folder
app.use(express.static(path.join(__dirname, '/../', 'build')));

// every HTTP GET should route to index.html since routing is controlled by React if used.
app.get('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../' ,'build', 'index.html'));
});

app.listen(5000);
