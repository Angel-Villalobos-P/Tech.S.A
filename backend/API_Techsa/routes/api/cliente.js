const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const {cliente} = require('../../db');

//Insert
router.post('/', [
    check('usuario', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('contrasena', 'La contraseña es obligatorio').not().isEmpty(),
    check('correo', 'El correo debe estar correcto').isEmail()
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errores: errors.array() })
        }

        req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 1);
        const clientes = await cliente.create(req.body);
        res.json(clientes); 
        next();
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const clientes = await cliente.findAll();
        res.json(clientes); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await cliente.update(req.body, {
            where: {idCliente: req.params.id}
        });
        res.json({ success: 'Se ha modificado el cliente' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await cliente.destroy({
            where: {idCliente: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el cliente' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});


router.post('/login', async (req, res, next) => {
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

module.exports = router;