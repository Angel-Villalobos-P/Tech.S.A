const router = require('express').Router();

const {telefoniaMovil} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const TelMovil = await telefoniaMovil.create(req.body);
        res.json(TelMovil); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const TelMovil = await telefoniaMovil.findAll();
        res.json(TelMovil); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await telefoniaMovil.update(req.body, {
            where: {idTelMovil: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de telefonía movil' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await telefoniaMovil.destroy({
            where: {idTelMovil: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de telefonía movil' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;