const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Homeowner extends Model {}

Homeowner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "project",
            key: id,
        },
      },
     contractor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "contractor",
            key: id,
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'homeowner',
  }
);

module.exports = Homeowner;