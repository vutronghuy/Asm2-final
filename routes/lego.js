var express = require('express');
const LegoModel = require('../models/LegoModel');
const NeftModel = require('../models/NeftModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var lego = await LegoModel.find();
    res.render('lego/list', { lego });
})
//: để hiện id
router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await LegoModel.findByIdAndDelete(id)
    .then(() => console.log("delete successfully!"))
    .catch(() => console.log("delete failed"));
    res.redirect('/lego');
})

router.get('/add', async (req, res) => {
    res.render('lego/add');
})
router.post('/add', async (req, res) => {
    const lego = await LegoModel.create(req.body);
    console.log(lego);
    res.redirect('/lego');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var lego = await LegoModel.findById(id);
    res.render('lego/edit', { lego });

})
router.post('/edit/:id', async (req, res) => {
    await LegoModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => console.log("edit successfully!"))
    .catch(() => console.log("edit failed"));
    res.redirect('/lego');
    
})
router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var lego = await LegoModel.find({name : new RegExp(keyword, "i")})
    var neft = await NeftModel.find({name : new RegExp(keyword, "i")})
    res.render('search-result', { lego, neft });
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var lego = await LegoModel.findById(id);
    //render ra file "views/mobile/detail.hbs"
    res.render('lego/detail', { lego });
 })


module.exports = router; 