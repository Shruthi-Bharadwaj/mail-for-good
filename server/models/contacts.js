'use strict';
module.exports = function(sequelize, DataTypes) {
  var contact = sequelize.define('contacts', {
    email: DataTypes.STRING(60),
  });
  contact.associate = function (models) {
      // associations can be defined here
      contact.belongsTo(models.user);
      contact.hasMany(models.tags, {
        foreignKey: {
          unique: 'TAGS_UNIQUE'
        }
      });
  }
  return contact;
};
