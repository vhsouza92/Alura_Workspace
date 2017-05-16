// var http = require('http')
//     ,app = require('./config/express');

// http.createServer(app).listen(3000, function() {
//     console.log('Servidor estutando na porta: ' + this.address().port);
// });

var http = require('http')
    ,app = require('./config/express')
    
http.createServer(app).listen(process.env.PORT, process.env.IP);

console.log("Servidor escutando na porta:"+ process.env.PORT);
console.log("IP: "+ process.env.IP);






