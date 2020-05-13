module.exports = (sequelize, Sequelize) => {
  const Auth = sequelize.define('Auth', {
    authId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.STRING,
        // unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    displayName: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.BIGINT
    }
  },{
        tableName: 'auth',
        timestamps: true
  });
  return Auth;
}