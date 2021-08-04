const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contractor extends Model {}

Contractor.init(
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
     homeowner_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "homeowner",
            key: id,
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'contractor',
  }
);

module.exports = Contractor;