const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRouter = require('./routes/api');
const app = express();
app.use(cors());

require('./db');

app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

//En produccion
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('/frontend/build'));

//     // app.get('*', (req, res))
// }

//Definir puerto
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor arrancado en el puerto ${port}`);
});  

//cd C:\Users\Fung Méndez\Desktop\API_Techsa 