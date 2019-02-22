const db = require('../dbConfig');

const getAll = () => {
  return db('actions');
};

const addActions = action => {
  return db('actions').insert(action);
};

module.exports = {
  getAll,
  addActions
};
