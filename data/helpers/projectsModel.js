const db = require('../dbConfig');

const getAll = () => {
  return db('projects');
};

const addProjects = project => {
  return db('projects').insert(project);
};

module.exports = {
  getAll,
  addProjects
};
