const router = require('express').Router();

const {cliente} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const clientes = await cliente.create(req.body);
        res.json(clientes);
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

module.exports = router;