const router = require('express').Router();

const {contratoInternet} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const inter = await contratoInternet.create(req.body);
        res.json(inter); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const inter = await contratoInternet.findAll();
        res.json(inter); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await contratoInternet.update(req.body, {
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de internet del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await contratoInternet.destroy({
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de internet del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;