const express = require('express');
const products = require('../controllers/product.controller.js');
const router = express.Router();

router.get('/', products.findAll);

router.post('/', products.create);

router.get('/:productId', products.findOne);

router.put('/:productId', products.update);

router.delete('/:productId', products.delete);

module.exports = router;