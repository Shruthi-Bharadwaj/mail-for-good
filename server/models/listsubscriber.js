'use strict';
module.exports = function(sequelize, DataTypes) {
  var listsubscriber = sequelize.define('listsubscriber', {
    email: DataTypes.STRING,
    subscribed: { type: DataTypes.BOOLEAN, defaultValue: true },
    unsubscribeKey: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    mostRecentStatus: { type: DataTypes.STRING, defaultValue: 'unconfirmed' }, // bounce:permanent, bounce:transient, complaint
    additionalData: { type: DataTypes.JSON }
  }, {
      indexes: [
        {
            fields: ['email']
        },
        {
            fields: ['subscribed']
        }
      ]
    });
    listsubscriber.associate = function (models) {
        // associations can be defined here
        listsubscriber.belongsTo(models.list);
        listsubscriber.hasMany(models.campaignanalyticslink);
        listsubscriber.hasMany(models.campaignanalyticsopen);
        listsubscriber.hasMany(models.campaignsubscriber);
  }
  return listsubscriber;
};
