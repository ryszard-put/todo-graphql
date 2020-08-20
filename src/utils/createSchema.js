const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

exports.createSchema = () =>
  makeExecutableSchema({
    typeDefs: mergeTypeDefs(
      loadFilesSync(path.join(__dirname, '../types/**/*.type.js')),
      {
        all: true,
      }
    ),
    resolvers: mergeResolvers(
      loadFilesSync(path.join(__dirname, '../resolvers/**/*.resolver.js')),
      {
        all: true,
      }
    ),
  });
