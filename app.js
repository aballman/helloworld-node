var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');

var healthcheckRoutes = require('./healthcheck/healthcheck.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var port 	= process.env.PORT || 3000;
var router 	= express.Router()

healthcheckRoutes(router);

router.get('/', function(req, res){
	res.json({"message": "Hello World"});
})

app.use('/', router);

app.listen(port, function(){
	console.log("Now listening on port " + port);
});
