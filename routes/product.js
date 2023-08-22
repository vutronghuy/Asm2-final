var express = require('express');
const ProductModel = require('../models/ProductModel');
const NeftModel = require('../models/NeftModel');
const CategoryModel = require('../models/CategoryModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var products = await ProductModel.find();
    res.render('product/productList', { products });
})
//: để hiện id
router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await ProductModel.findByIdAndDelete(id)
    .then(() => console.log("delete successfully!"))
    .catch(() => console.log("delete failed"));
    res.redirect('/product');
})

router.get('/add', async (req, res) => {
    res.render('product/productAdd');
})
router.post('/add', async (req, res) => {
    await ProductModel.create(req.body);
    await CategoryModel.create(req.body);
    res.redirect('/product');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = await ProductModel.findById(id);
    var category = await CategoryModel.findById(id);
    res.render('product/productEdit', { product : product, category : category});

})
router.post('/edit/:id', async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body)
    await CategoryModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => console.log("edit successfully!"))
    .catch(() => consolr.log("edit failed"));
    res.redirect('/product');
    
})
router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var products = await ProductModel.find({name : new RegExp(keyword, "i")})
    var nefts = await NeftModel.find({name : new RegExp(keyword, "i")})
    res.render('search-result', { products : products, nefts : nefts });
})



module.exports = router; 