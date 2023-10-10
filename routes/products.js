const express= require("express");
const router= express.Router();

// controller
const productController = require('../controllers/product_controller');

// routes
router.get('/', productController.getProducts);
router.post('/create', productController.create);
router.post('/:id/quant', productController.update);
router.delete('/:id', productController.delete);


module.exports = router;