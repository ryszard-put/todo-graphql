const { DataTypes } = require('sequelize');

const userModel = {
  // Fields definitions
  modelName: 'User',
  columns: {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  config: {
    underscored: true,
  },
};

module.exports = userModel;
