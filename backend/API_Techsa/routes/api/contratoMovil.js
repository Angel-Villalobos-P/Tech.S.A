const router = require('express').Router();

const {contratoMovil} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const Telmovil = await contratoMovil.create(req.body);
        res.json(Telmovil); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const Telmovil = await contratoMovil.findAll();
        res.json(Telmovil); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await contratoMovil.update(req.body, {
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de telefonía movil del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await contratoMovil.destroy({
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de telefonía movil del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;