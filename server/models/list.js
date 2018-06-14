'use strict';
module.exports = function(sequelize, DataTypes) {
  var list = sequelize.define('list', {
    name: DataTypes.STRING,
    subscribeKey: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    additionalFields: { type: DataTypes.JSON, defaultValue: [ ] },
    status: { type: DataTypes.STRING, defaultValue: 'processing', validate: { isIn: [['processing', 'ready']] } },
    total: { type: DataTypes.INTEGER, defaultValue: 0 },
  });

    list.associate = function (models) {
        // associations can be defined here
        list.belongsTo(models.user);
    }
  return list;
};
