const router = require('express').Router();

const cubeService = require('../services/cubeService');

router.get('/', async(req,res) => {
    const allCubes = await cubeService.getAll();
    res.render('index', {allCubes})
})
router.get('/about', (req,res) => {
    res.render('about')
})

module.exports = router