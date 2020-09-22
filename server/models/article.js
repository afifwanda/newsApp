'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Article extends Model{}
  Article.init(
  {
    title: DataTypes.STRING,
    categories: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    article: DataTypes.TEXT
  }, {sequelize, tableName:'Articles'}
  )

  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};