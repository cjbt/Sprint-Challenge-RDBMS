const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const projectsRoute = require('./data/routes/projectsRoute');
const actionsRoute = require('./data/routes/actionsRoute');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('short'));

server.get('/', (req, res) => {
  res.send('<h1>SERVER IS WORKING AT api/projects and api/actions</h1>');
});

server.use('/api/projects', projectsRoute);
server.use('/api/actions', actionsRoute);

module.exports = server;
