const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.createNewProduct);

router.get('/:id', ProductController.findProductById);

router.patch('/:id', ProductController.updateProductById);

router.delete('/:id', ProductController.deleteProductById);



module.exports = router;