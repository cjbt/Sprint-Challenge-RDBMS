exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          description: 'rowValue1',
          notes:
            'hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor ',
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          description: 'rowValue2',
          notes:
            'hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor ',
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          description: 'rowValue3',
          notes:
            'hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor ',
          completed: false,
          project_id: 1
        },
        {
          id: 4,
          description: 'rowValue3',
          notes:
            'hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor ',
          completed: false,
          project_id: 2
        },
        {
          id: 5,
          description: 'rowValue3',
          notes:
            'hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor hodor dodor ',
          completed: false,
          project_id: 3
        }
      ]);
    });
};
