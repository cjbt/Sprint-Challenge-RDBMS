const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('short'));

server.get('/', (req, res) => {
  res.send('<h1>SERVER IS WORKING AT api/projects and api/actions</h1>');
});

module.exports = server;
