const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const {usuario} = require('../../db');

//Insert
router.post('/', [
    check('idUsuario', 'La cédula de usuario es obligatorio').not().isEmpty(),
    check('contrasena', 'La contraseña es obligatorio').not().isEmpty(),
    check('puesto', 'El puesto de usuario es obligatorio').not().isEmpty()
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errores: errors.array() })
        }

        req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 1);
        const usuarios = await usuario.create(req.body);
        res.json(usuarios); 
        next();
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const usuarios = await usuario.findAll();
        res.json(usuarios);
        // console.log(res);
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await usuario.update(req.body, {
            where: {idLaboral: req.params.id}
        });
        res.json({ success: 'Se ha modificado el usuario' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await usuario.destroy({
            where: {idLaboral: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el usuario' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;