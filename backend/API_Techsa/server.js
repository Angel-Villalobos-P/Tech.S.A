const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

require('dotenv').config({ path: 'variables.env' });

const apiRouter = require('./routes/api');
const app = express();

app.use(cors());

require('./db');

app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use(express.static('../../frontend/build'));
//En produccion
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('/frontend/build'));

//     // app.get('*', (req, res))
// }

//Definir puerto y host
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
    console.log(`Servidor arrancado en el puerto ${port}`);
});  