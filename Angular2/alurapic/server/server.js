var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(process.env.PORT, process.env.IP);

console.log("Servidor escutando na porta:"+ process.env.PORT);
console.log("IP: "+ process.env.IP);

