const router = require('express').Router();

const auth = require('../middleware/auth')

const slug = require('slug');
const { update } = require('../models/Portfolio');
const Portfolio = require('../models/Portfolio');


//Create
router.post('/', auth, async (req, res) => {

    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,


    });


    try {
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        });
    } catch (err) {
        console.log(err)
        res.json({
            success: false,
            messagem: err
        })
    }
});

router.get('/', async (req, res) => {


    try {
        const portfolio = await Portfolio.find()

        res.json({
            success: true,
            data: portfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

})

router.get('/:slug', async (req, res) => {


    try {
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolio
        })
    } catch (error) {
        res.json({
            success: false,
            message: err
        })
    }
});
//update
router.patch('/:slug', auth, async (req, res) => {
    try {
        const updatePortfolio = await portfolio.updateOne({
            slug: req.params.slug
        },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    longDescription: req.body.longDescription,
                    image: req.body.image

                }

            })
        res.json({
            success: true,
            update: updatePortfolio.nModified
        })

    } catch (error) {
        res.json({
            success: false,
            message: err
        })
    }
});
//delete
router.delete('/:slug', auth, async (req, res) => {
    try {
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        });
        res.json({
            success: true,
            data: deletedPortfolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

})

module.exports = router