const router = require('express').Router();

const {contrato} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const contratos = await contrato.create(req.body);
        // console.log(req.body);
        res.json(contratos);
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const contratos = await contrato.findAll();
        res.json(contratos); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await contrato.update(req.body, {
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha modificado el contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await contrato.destroy({
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;