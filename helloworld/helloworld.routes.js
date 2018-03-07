var helloworld = require('./helloworld')

module.exports = function(router){
	router.get('/', helloworld.getHelloWorld)
}