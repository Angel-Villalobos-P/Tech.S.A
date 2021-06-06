const router = require('express').Router();

const apiClienteRouter = require('./api/cliente');
const apiUsuarioRouter = require('./api/usuario');
const apiCelularRouter = require('./api/celular');
const apiInternetRouter = require('./api/internet');
const apiTelFijaRouter = require('./api/telefoniaFija');
const apiTelMovioRouter = require('./api/telefoniaMovil');
const apiContratoRouter = require('./api/contrato');
const apiContratoCelularRouter = require('./api/contratoCelulares');
const apiContratoInternetRouter = require('./api/contratoInternet');
const apiContratoFijaRouter = require('./api/contratoFija');
const apiContratoMovilRouter = require('./api/contratoMovil');

router.use('/cliente', apiClienteRouter);
router.use('/usuario', apiUsuarioRouter);
router.use('/celular', apiCelularRouter);
router.use('/internet', apiInternetRouter);
router.use('/telfija', apiTelFijaRouter);
router.use('/telmovil', apiTelMovioRouter);
router.use('/contrato', apiContratoRouter);
router.use('/ccelular', apiContratoCelularRouter);
router.use('/cinternet', apiContratoInternetRouter);
router.use('/ctelfija', apiContratoFijaRouter);
router.use('/ctelmovil', apiContratoMovilRouter);

module.exports = router;