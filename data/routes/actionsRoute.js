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

route.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (!body.description || !body.notes || !body.project_id) {
    res.status(404).json({ message: 'you need the fields' });
  } else if (!id) {
    res.status(404).json({ message: 'id not found' });
  }
  db.updateActions(id, body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.delete('/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: 'id not found' });
  }
  db.deleteActions(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).status(err);
    });
});
module.exports = route;
