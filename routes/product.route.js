const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, AddProduct, UpdateProduct, DeleteProduct} = require('../controllers/product.controllers.js');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', AddProduct);
router.put('/:id', UpdateProduct);
router.delete('/:id', DeleteProduct);

module.exports = router;