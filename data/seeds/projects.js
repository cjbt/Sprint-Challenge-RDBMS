exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'rowValue1',
          description:
            'This is a massive description of this projects lala Never gonna give you up never gonna let you down never gonna run around and dessert you',
          completed: false
        },
        {
          id: 2,
          name: 'rowValue2',
          description:
            'This is a massive description of this projects lala Never gonna give you up never gonna let you down never gonna run around and dessert you',
          completed: false
        },
        {
          id: 3,
          name: 'rowValue3',
          description:
            'This is a massive description of this projects lala Never gonna give you up never gonna let you down never gonna run around and dessert you',
          completed: false
        }
      ]);
    });
};
