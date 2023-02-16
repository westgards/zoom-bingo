const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Bootcamp extends Model {
}

Bootcamp.init(
  {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },
  {
    hooks: {
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bootcamp',
  }
);

module.exports = Bootcamp;
