const Sequelize = require('sequelize');


const sequelize = require('../dbConnection');



const Form_Model = sequelize.define('form', {



    name : {
        type : Sequelize.STRING(50)
    },

    email : {
        type : Sequelize.STRING
    },

    salary : {
        type : Sequelize.DOUBLE
    }


});




module.exports = Form_Model;