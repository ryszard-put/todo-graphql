const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { createSchema } = require('./utils/createSchema');
const sequelize = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    const apolloServer = new ApolloServer({
      schema: createSchema(),
      context: ({ req, res }) => ({
        req,
        res,
        sequelize,
        models: sequelize.models,
      }),
    });

    const app = express();

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
      console.log('server started');
    });
  } catch (err) {
    throw err;
  }
})().catch((err) => console.log(err));
