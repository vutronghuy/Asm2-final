var express = require('express');
const NeftModel = require('../models/NeftModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var neft = await NeftModel.find();
    res.render('neft/list', { neft });
})
//: để hiện id
router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await NeftModel.findByIdAndDelete(id)
        .then(() => console.log("delete successfully!"))
        .catch(() => console.log("delete failed"));
    res.redirect('/neft');
})

//----------------------------------------------------------------

router.get('/add', async (req, res) => {
    res.render('neft/add');
})

router.post('/add', async (req, res) => {
    const neft = await NeftModel.create(req.body);
    console.log(neft);
    res.redirect('/neft');
})

//----------------------------------------------------------------

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var neft = await NeftModel.findById(id);
    res.render('neft/edit', { neft });
})
router.post('/edit/:id', async (req, res) => {
    await NeftModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => console.log("edit successfully!"))
        .catch(() => console.log("edit failed"));
    res.redirect('/neft');

})
router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var lego = await LegoModel.find({ name: new RegExp(keyword, "i") })
    var neft = await NeftModel.find({ name: new RegExp(keyword, "i") })
    res.render('search-result', { lego, neft });
})

module.exports = router; 