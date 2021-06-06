const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const app = express();

require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Servidor arrancado');
});  

//cd C:\Users\Fung Méndez\Desktop\API_Techsa 