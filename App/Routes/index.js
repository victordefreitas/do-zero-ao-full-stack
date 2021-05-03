const router = require('express').Router();

require('./../MongoDB/mongoconnection');
const portfolio = require('./portfolio');

router.get('/', (req, res) => {
    res.send({
        sucess: false,
        message: 'error 123'
    })
})


router.use('/portfolio', portfolio);

module.exports = router;