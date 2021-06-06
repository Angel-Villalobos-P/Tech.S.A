const router = require('express').Router();

const {telefoniaFija} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const TelFija = await telefoniaFija.create(req.body);
        res.json(TelFija); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const TelFija = await telefoniaFija.findAll();
        res.json(TelFija); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await telefoniaFija.update(req.body, {
            where: {idTelFija: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de telefonía fija' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await telefoniaFija.destroy({
            where: {idTelFija: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de telefonía fija' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;