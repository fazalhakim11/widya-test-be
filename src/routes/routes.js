const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const { authenticateJWT } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/profile', authenticateJWT, userController.getProfile);

router.post('/products', authenticateJWT, productController.createProduct);
router.get('/products', authenticateJWT, productController.getProducts);
router.put('/products/:id', authenticateJWT, productController.updateProduct);
router.delete('/products/:id', authenticateJWT, productController.deleteProduct);

module.exports = router;
