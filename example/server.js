const path = require('path');
const opn = require('opn');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(compression());

app.listen({
  host: "localhost",
  port: process.env.PORT || 8080
}, function() {
  const host = this.address();
  const address = `http://${host.address}:${host.port}/index.html`

  opn(address);
  
  console.log(`Listening at ${address}`);
});
