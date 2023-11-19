const express = require('express');
const { generateJWT } = require('./jwtGenerator');
const { print_t_rex } = require('./helpers');

app = express();

app.route('/jwt').get((req, res) => {
  let jwtValue = generateJWT();

  console.log('');
  console.log('+----------------------------------------------------------------------------+');
  console.log('| Key generated on ' + new Date() + ' |');
  console.log('+----------------------------------------------------------------------------+');
  console.log(jwtValue);
  
  res.json({ jwtValue });
});

print_t_rex();

app.listen(process.env.PORT);

console.log('App running and lintening on port ' + process.env.PORT + '...');