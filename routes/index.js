var express = require('express');
const ProductModel = require('../models/ProductModel');
const NeftModel = require('../models/NeftModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var product = await ProductModel.find();
  var neft = await NeftModel.find();
  // res.send(neft);
  
  res.render('index', {product, neft });
});

module.exports = router;
