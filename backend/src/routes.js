const express = require('express');

const userController = require('./controller/UserController');
const productController = require('./controller/ProductController');

const routes = express.Router();

routes.get('/products', productController.index);

routes.post('/products', productController.create);

routes.get('/users', userController.index);
routes.post('/users', userController.create);

module.exports = routes;