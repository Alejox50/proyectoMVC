const productController = require('../../controllers/productController');

const router = require('express').Router();

router.get('/listado', productController.listado)

module.exports = router;
