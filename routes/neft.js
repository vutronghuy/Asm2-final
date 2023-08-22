var express = require('express');
const NeftModel = require('../models/NeftModel');
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var nefts = await NeftModel.find();
    res.render('neft/neftList', { nefts: nefts });
})
//: để hiện id
router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await NeftModel.findByIdAndDelete(id)
        .then(() => console.log("delete successfully!"))
        .catch(() => console.log("delete failed"));
    res.redirect('/neft');
})

router.get('/add', async (req, res) => {
    res.render('neft/neftAdd');
})
router.post('/add', async (req, res) => {
    await NeftModel.create(req.body);
    await CategoryModel.create(req.body);
    res.redirect('/neft');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var neft = await NeftModel.findById(id);
    res.render('neft/neftEdit', { neft: neft });
})
router.post('/edit/:id', async (req, res) => {
    await NeftModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => console.log("edit successfully!"))
        .catch(() => consolr.log("edit failed"));
    res.redirect('/neft');

})
router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var products = await ProductModel.find({ name: new RegExp(keyword, "i") })
    var nefts = await NeftModel.find({ name: new RegExp(keyword, "i") })
    res.render('search-result', { products, nefts });
})

module.exports = router; 