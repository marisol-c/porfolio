const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const router = require('../routers/main');

app.use(express.static('public'));


app.use('/', main)






app.listen(port,()=> console.log('Servidor corriendo en el puerto ' + port))