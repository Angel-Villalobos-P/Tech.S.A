const router = require('express').Router();

const {contratoCelulares} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const celulares = await contratoCelulares.create(req.body);
        res.json(celulares); 
    } catch (error) {
        console.log(error);
        next();
    }
});

//Select
router.get('/', async (req, res) => {
    try {
        const celulares = await contratoCelulares.findAll();
        res.json(celulares); 
    } catch (error) {
        console.log(error);
        next();
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await contratoCelulares.update(req.body, {
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha modificado el celular del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await contratoCelulares.destroy({
            where: {idContrato: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el celular del contrato' }); 
    } catch (error) {
        console.log(error);
        next();
    }
});

module.exports = router;