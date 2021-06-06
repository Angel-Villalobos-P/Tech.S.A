const router = require('express').Router();

const {celular} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const celulares = await celular.create(req.body);
        res.json(celulares); 
    } catch (error) {
        console.log(error);
        next();
    }
});

//Select
router.get('/', async (req, res) => { 
    try {
        const celulares = await celular.findAll();
        res.json(celulares);
    } catch (error) {
        console.log(error);
        next();
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await celular.update(req.body, {
            where: {idCelular: req.params.id}
        });
        res.json({ success: 'Se ha modificado el celular' }); 
    } catch (error) {
        console.log(error);
        next();
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await celular.destroy({
            where: {idCelular: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el celular' }); 
    } catch (error) {
        console.log(error);
        next();
    }
});

module.exports = router;