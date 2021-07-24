const router = require('express').Router();

const {usuario} = require('../../db');

//Insert
router.post('/', async (req, res) => {
    try {
        const usuarios = await usuario.create(req.body);
        res.json(usuarios); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Select
router.get('/', async (req, res) => {
    try {
        const usuarios = await usuario.findAll();
        res.json(usuarios);
        // console.log(res);
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Update
router.put('/:id', async (req, res) => {
    try {
        await usuario.update(req.body, {
            where: {idLaboral: req.params.id}
        });
        res.json({ success: 'Se ha modificado el usuario' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        await usuario.destroy({
            where: {idLaboral: req.params.id}
        });
        res.json({ success: 'Se ha eliminado el usuario' }); 
    } catch (error) {
        console.log(error);
        next();
    }
    
});

module.exports = router;