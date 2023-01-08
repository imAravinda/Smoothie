const express = require('express');
const {  signup_get, signup_post, login_get, login_post, logout_get } = require('../controllers/AuthControl');

const routes = express.Router();

routes.get('/signUp',signup_get);
routes.post('/signUp',signup_post);
routes.get('/login',login_get);
routes.post('/login',login_post);
routes.get('/logout',logout_get);

module.exports = routes;