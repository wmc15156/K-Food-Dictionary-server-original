const express = require('express');
const router = express.Router();
const { productController } = require('../controller');

router.post('/',productController.store.post);

// router.get('/:productId', (req, res) => ());

module.exports = router;