'use strict';
module.exports = (sequelize, DataTypes) => {
  const RECRUITMENT_SITE = sequelize.define('RECRUITMENT_SITE', {
    seq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    crwaling_root_urls: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    is_use: DataTypes.TINYINT(1),
    addtional_urls: DataTypes.STRING(2000)
  }, {});
  RECRUITMENT_SITE.associate = function(models) {
    // associations can be defined here
  };
  return RECRUITMENT_SITE;
};