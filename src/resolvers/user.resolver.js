const { gql } = require('apollo-server-express');

module.exports = {
  Query: {
    hi: async (_root, _args, { models }) => {
      try {
        const jane = await models.User.create({
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@doe.com',
          password: '123',
        });
        console.log(jane);
      } catch (err) {
        console.log(err);
      }
      return 'Hello!';
    },
  },
};
