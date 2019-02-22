const express = require('express');
const db = require('../helpers/projectsModel');
const route = express.Router();

route.get('/', (req, res) => {
  db.getAll()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      err.status(500).json(err);
    });
});

route.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res
      .status(404)
      .json({ message: 'You need a name or description there, bud' });
  }
  db.addProjects({ name, description })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.get('/:id', (req, res) => {
  const id = req.params.id;
  db.getProjectsById(id)
    .then(ids => {
      if (ids) {
        res.status(200).json(ids);
      } else {
        res.status(404).json({ message: 'Id cannot be found' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = route;
