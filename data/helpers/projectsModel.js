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
        id: result[0].id,
        name: result[0].name,
        description: result[0].description,
        completed: result[0].completed,
        actions: result.map(item => ({
          id: item.recipe,
          description: item.description,
          notes: item.notes,
          completed: item.completed
        }))
      };
      return project;
    });
};

module.exports = {
  getAll,
  addProjects,
  getProjectsById
};
