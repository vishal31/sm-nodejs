const Sequelize = require('sequelize');


const sequelize = new Sequelize('sm-assignment', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});



sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    throw new Error(`Unable to connect to the database: ${err}`);
})

module.exports = sequelize;