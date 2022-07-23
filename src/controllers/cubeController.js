const router = require('express').Router();


const displayCreatePage = (req,res) => {
    res.render('create')
};

const displayDetailsPage = (req,res) => {
    res.render('details')
};

const createCubeHandler = (req,res) => {
    console.log(req.body);
    res.end();
}


router.get('/create', displayCreatePage);
router.post('/create', createCubeHandler);

router.get('/details/:cubeId',displayDetailsPage )

module.exports = router