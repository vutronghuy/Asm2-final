var express = require('express');
const LegoModel = require('../models/LegoModel');
const NeftModel = require('../models/NeftModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var lego = await LegoModel.find();
  var neft = await NeftModel.find();
  // res.send(neft);
  
  res.render('index', {lego, neft });
});

module.exports = router;
