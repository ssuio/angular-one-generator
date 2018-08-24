const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});