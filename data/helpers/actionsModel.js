const db = require('../dbConfig');

const getAll = () => {
  return db('actions');
};

const addActions = action => {
  return db('actions').insert(action);
};

const updateActions = (id, changes) => {
  return db('actions')
    .where({ id })
    .update(changes);
};

const deleteActions = id => {
  return db('actions')
    .where({ id })
    .del();
};
module.exports = {
  getAll,
  addActions,
  updateActions,
  deleteActions
};
