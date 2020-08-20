const path = require('path');
const fs = require('fs');

const createSequelizeModels = (sequelizeInstance) => {
  fs.readdir(
    __dirname + '/../models',
    { withFileTypes: true },
    (err, files) => {
      if (err) throw new Error('Failed to load directory');
      else {
        files.forEach((file) => {
          if (file.name.includes('model.js')) {
            const model = require(`${__dirname}/../models/${file.name}`);
            sequelizeInstance.define(
              model.modelName,
              model.columns,
              model.config
            );
          }
        });
      }
    }
  );
};

module.exports = createSequelizeModels;
