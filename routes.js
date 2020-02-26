const express= require('express');

const router = express.Router();


const Form_Controller = require('./controllers/form_controller');



router.get('/salary', Form_Controller.Salary_Form_Controller);

router.get('/fetch', Form_Controller.Get_Form_Controller);

router.post('/insert', Form_Controller.Post_Form_Controller);

router.put('/update', Form_Controller.Put_Form_Controller);

router.delete('/delete', Form_Controller.Delet_Form_Controller);






module.exports = router;