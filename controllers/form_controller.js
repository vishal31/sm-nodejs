const Sequelize = require('sequelize');

//models
const Form_Model = require('../models/form_model');


exports.Salary_Form_Controller = (req, res, next) => {

    const Op = Sequelize.Op

    const salary = req.query.salary;
    const sortBy = req.query.sortBy;

    
    let conditions;
    if(sortBy == 'less than') {

        conditions = Op.lt;

    }else if(sortBy == 'greater than') {

        conditions = Op.gt;
    }

    Form_Model.findAll({

        //attributes : ['salary'],

        where : {
            salary : {
                [conditions] : [salary]
            }
        }
    })
    .then(result => {

       // console.log(result)

        res.json({data : result});
    })
    .catch(err => next(err))

};//End of salary fetching methods




exports.Get_Form_Controller = (req, res, next) => {


    Form_Model.findAll()
    .then(result => {
        res.json({data : result});
    })
    .catch(err => next(err))

};//End of fetch methods



exports.Post_Form_Controller = (req, res, next) => {


    Form_Model.create({

        name   : req.body.name,
        email  : req.body.email,
        salary : req.body.salary

    })
    .then(result => {
        res.status(201).json('Inserted sucessfully');
    })
    .catch(err => next(err))

};//End of Insert methods




exports.Put_Form_Controller = (req, res, next) => {


    Form_Model.update({

        name   : req.body.name,
        email  : req.body.email,
        salary : req.body.salary

    }, 
    {
        where : {id : req.body.id}
    })
    .then(result => {
        res.json('Updated sucessfully');
    })
    .catch(err => next(err))

};//End of Insert methods



exports.Delet_Form_Controller = (req, res, next) => {


    Form_Model.destroy({

        where : { id : req.body.id}

    })
    .then(result => {
        res.json('Deleted sucessfully');
    })
    .catch(err => next(err))

};//End of Insert methods