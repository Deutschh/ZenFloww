
const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');

// Quando uma requisição POST chegar em /register,
// chame a função 'registerUser' do nosso controller.
router.post('/register', controller.registerUser);

//rota para o Login
router.post('/login', controller.loginUser); 

module.exports = router;