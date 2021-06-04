const routes = require('./src/routes/usersRoute');

const express = require('express');

const server = express();


console.log("Aplicação está em execução...");


server.use(express.json());
server.use(routes);
server.listen(3333);