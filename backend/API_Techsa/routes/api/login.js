const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const {cliente, usuario} = require('../../db');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/cliente', async (req, res, next) => {
    try {
        const user = await cliente.findOne({ where: { correo: req.body.correo } });
        if(user){
            const iguales = bcrypt.compareSync(req.body.contrasena, user.contrasena);
            if(iguales){
                res.json({ error: 'Correcto' }); 
            }else{
                res.json({ error: 'Error en el usuario y/o contraseña' }); 
            }
        }else{
            res.json({ error: 'Error en el usuario y/o contraseña' });
        }
        next();
    } catch (error) {
        console.log(error);
        next();
    }
    
});

router.post('/usuario', async (req, res, next) => {
    try {
        const user = await usuario.findOne({ where: { idLaboral: req.body.idLaboral } });
        if(user){
            const iguales = bcrypt.compareSync(req.body.contrasena, user.contrasena);
            if(iguales){
                res.json({ error: 'Correcto' }); 
            }else{
                res.json({ error: 'Error en el usuario y/o contraseña' }); 
            }
        }else{
            res.json({ error: 'Error en el usuario y/o contraseña' });
        }
        next();
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;