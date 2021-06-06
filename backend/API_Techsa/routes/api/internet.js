const router = require('express').Router();

const {internet} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const inter = await internet.create(req.body);
        res.json(inter); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const inter = await internet.findAll();
        res.json(inter); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await internet.update(req.body, {
            where: {idInternet: req.params.id}
        });
        res.json({ success: 'Se ha modificado el plan de internet' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await internet.destroy({
            where: {idInternet: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el plan de internet' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;