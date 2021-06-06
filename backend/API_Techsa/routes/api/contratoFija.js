const router = require('express').Router();

const {contratoFija} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const TelFija = await contratoFija.create(req.body);
        res.json(TelFija); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const TelFija = await contratoFija.findAll();
        res.json(TelFija); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await contratoFija.update(req.body, {
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de telefonía fija del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await contratoFija.destroy({
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de telefonía fija del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;