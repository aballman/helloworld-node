var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');

var healthcheckRoutes = require('./healthcheck/healthcheck.routes')
var helloworldRoutes  = require('./helloworld/helloworld.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var port 	= process.env.PORT || 3000;
var router 	= express.Router()

var routes = [
	healthcheckRoutes,
	helloworldRoutes
]

routes.forEach( function(route){
	route(router);
})

app.use('/', router);

app.listen(port, function(){
	console.log("Now listening on port " + port);
});
