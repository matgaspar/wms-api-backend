const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const routes = new express.Router();

routes.get('/usuarios', UsuarioController.index);

module.exports = routes;
