const Sequelize = require('sequelize');

require('dotenv').config({ path: 'variables.env' });

const ClienteModel = require('./models/clientes');
const UsuarioModel = require('./models/usuario');
const CelularModel = require('./models/celular');
const InternetModel = require('./models/internet');
const TelefoniaFijaModel = require('./models/telefoniaFija');
const TelefoniaMovilModel = require('./models/telefoniaMovil');
const ContratoModel = require('./models/contrato');
const ContratoCelularesModel = require('./models/contratoCelulares');
const ContratoInternetModel = require('./models/contratoInternet');
const ContratoFijaModel = require('./models/contratoFija');
const ContratoMovilModel = require('./models/contratoMovil');


const sequelize = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true //Evita el cambio a plural del nombre de las tablas
    }
});
// const sequelize = new Sequelize('techsa', 'root', 'rootangel', {
//     host: '127.0.0.1',
//     port: '3306',
//     dialect: 'mysql',
//     define: {
//         timestamps: false,
//         freezeTableName: true //Evita el cambio a plural del nombre de las tablas
//     }
// });

const cliente = ClienteModel(sequelize, Sequelize);
const usuario = UsuarioModel(sequelize, Sequelize);
const celular = CelularModel(sequelize, Sequelize);
const internet = InternetModel(sequelize, Sequelize);
const telefoniaFija = TelefoniaFijaModel(sequelize, Sequelize);
const telefoniaMovil = TelefoniaMovilModel(sequelize, Sequelize);
const contrato = ContratoModel(sequelize, Sequelize);
const contratoCelulares = ContratoCelularesModel(sequelize, Sequelize);
const contratoInternet = ContratoInternetModel(sequelize, Sequelize);
const contratoFija = ContratoFijaModel(sequelize, Sequelize);
const contratoMovil = ContratoMovilModel(sequelize, Sequelize);

// ASOCIACIONES

//Contrato
cliente.hasMany(contrato);
contrato.belongsTo(cliente);

//ContratoCelular
contrato.hasMany(contratoCelulares, { foreignKey: 'idContrato' });
contratoCelulares.belongsTo(contrato, { foreignKey: 'idContrato' });

celular.hasMany(contratoCelulares, { foreignKey: 'idCelular' });
contratoCelulares.belongsTo(celular, { foreignKey: 'idCelular' });

//ContratoInternet
contrato.hasMany(contratoInternet, { foreignKey: 'idContrato' });
contratoInternet.belongsTo(contrato, { foreignKey: 'idContrato' });

internet.hasMany(contratoInternet, { foreignKey: 'idInternet' });
contratoInternet.belongsTo(internet, { foreignKey: 'idInternet' });

//Contrato Telefonia fija
contrato.hasMany(contratoFija, { foreignKey: 'idContrato' });
contratoFija.belongsTo(contrato, { foreignKey: 'idContrato' });

telefoniaFija.hasMany(contratoFija, { foreignKey: 'idTelFija' });
contratoFija.belongsTo(telefoniaFija, { foreignKey: 'idTelFija' });

//Contrato Telefonia movil
contrato.hasMany(contratoMovil, { foreignKey: 'idContrato' });
contratoMovil.belongsTo(contrato, { foreignKey: 'idContrato' });

telefoniaMovil.hasMany(contratoMovil, { foreignKey: 'idTelMovil' });
contratoMovil.belongsTo(telefoniaMovil, { foreignKey: 'idContrato' });


sequelize.sync({ force: false }).then( () => {
    console.log('tablas sincronizadas')
})

module.exports = {cliente,
    usuario, 
    celular, 
    internet, 
    telefoniaFija, 
    telefoniaMovil, 
    contrato,
    contratoCelulares,
    contratoInternet,
    contratoFija,
    contratoMovil
}