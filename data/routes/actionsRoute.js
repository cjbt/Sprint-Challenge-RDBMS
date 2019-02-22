const express = require('express');
const db = require('../helpers/actionsModel');
const route = express.Router();

route.get('/', (req, res) => {
  db.getAll()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.post('/', (req, res) => {
  const { description, notes, project_id } = req.body;
  if (!description || !notes || !project_id) {
    res.status(404).json({ message: 'you need the fields' });
  }
  db.addActions({ description, notes, project_id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = route;
