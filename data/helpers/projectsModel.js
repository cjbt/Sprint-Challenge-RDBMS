const db = require('../dbConfig');

const getAll = () => {
  return db('projects');
};

const addProjects = project => {
  return db('projects').insert(project);
};

const getProjectsById = id => {
  return db('projects as p')
    .select(
      'p.id',
      'p.name',
      'p.description',
      'p.completed',
      'a.id',
      'a.description',
      'a.notes',
      'a.completed'
    )
    .join('actions as a', 'a.project_id', 'p.id')
    .where('p.id', id)
    .then(result => {
      const project = {
        projects: {
          id: result[0].id,
          name: result[0].name,
          description: result[0].description,
          completed: result[0].completed === 0 ? false : true,
          actions: result.map(item => ({
            id: item.id,
            description: item.description,
            notes: item.notes,
            completed: item.completed
          }))
        }
      };
      return project;
    });
};

const updateProjects = (id, changes) => {
  return db('projects')
    .where({ id })
    .update(changes);
};

const deleteProjects = id => {
  return db('projects')
    .where({ id })
    .del();
};

module.exports = {
  getAll,
  addProjects,
  getProjectsById,
  updateProjects,
  deleteProjects
};
