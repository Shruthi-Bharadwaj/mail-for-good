'use strict';
module.exports = function(sequelize, DataTypes) {
  var tag = sequelize.define('tags', {
    name: {
      type: DataTypes.STRING,
      unique: 'TAGS_UNIQUE'
    }
  }, {
    timestamp: true
  });

  return tag;
};
