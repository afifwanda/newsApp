'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Projects extends Model{}

  Projects.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    role: DataTypes.STRING,
    technology: DataTypes.STRING,
    github: DataTypes.STRING,
    web: DataTypes.STRING,
    permalinks: DataTypes.STRING
  },{sequelize,tableName:'Projects'})

  Projects.associate = function(models) {
    // associations can be defined here
  };
  return Projects;
};