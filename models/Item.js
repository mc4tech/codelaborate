module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    item: DataTypes.STRING,
    price: DataTypes.STRING
  });
  return User;
};