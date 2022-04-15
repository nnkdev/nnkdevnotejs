const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('finance-db', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false },
    fullName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: true }
}, { tableName: 'user' });

const initSequelize = async () => {
    // try {
    //     await sequelize.authenticate();
    //     await sequelize.sync({ force: false });
    // } catch (error) {
    //     throw error;
    // }
};

module.exports = { initSequelize, User };