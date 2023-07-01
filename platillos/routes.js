const express = require('express');

const platillosRutas = require('./platillosRutas.js');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
        router.use('/platillos',platillosRutas);
}

module.exports = routerApi;