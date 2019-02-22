const db = require('../dbConfig');

const getAll = () => {
  return db('projects');
};

module.exports = {
  getAll
};
