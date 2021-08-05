const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

class Homeowner extends Model {  
  checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}}

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
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
        beforeUpdate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "homeowner",
  }
);

module.exports = Homeowner;
