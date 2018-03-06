var express 	= require('express');
var healthcheck = require('./healthcheck');

module.exports = function(router){
	router.get('/healthcheck', healthcheck.getHealthcheck)
}