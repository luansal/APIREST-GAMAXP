const Router = require('express'); 
const produtosController = require('../controllers/productControllers') ;
const departamentoController = require('../controllers/departamentoControllers');
const routes = Router(); 


routes.get('/produtos', produtosController.getAll);
routes.get('/produtos/:id', produtosController.getOneId);
routes.post('/produtos', produtosController.create);
routes.put('/produtos/:id', produtosController.update);
routes.get('/departamento', departamentoController.getAllDep);
routes.get('/departamento/:id',departamentoController.getdep);


module.exports = routes;