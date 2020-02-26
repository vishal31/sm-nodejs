const app = require('express')();
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use((req, res ,next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
});



const dbConnection = require('./dbConnection');
const form_route = require('./routes');




app.use(form_route);





//For Error Handlings
app.use((error,req, res, next) => {

    res.json(error.message);

    console.log(error);
})




dbConnection.sync();


app.listen(8080);

