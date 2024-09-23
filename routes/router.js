const express = require('express');
const router = express.Router();
const mac =  require('../controller/mac');
router.get('/', mac.index);

// Route for Index
router.get('/index', (req, res) => {
    res.render('index', { activePage: 'index' });
});

// Route for Shop
router.get('/shop', (req, res) => {
    res.render('shop', { activePage: 'shop' });
});

// Route for About Us
router.get('/about', (req, res) => {
    res.render('about', { activePage: 'about' });
});

router.get('/services', (req, res) => {
    res.render('services', { activePage: 'services' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { activePage: 'blog' });
});
router.get('/contact', (req, res) => {
    res.render('contact', { activePage: 'contact' });
});
router.get('/cart', (req, res) => {
    res.render('cart', { activePage: 'cart' });
});






module.exports = router;

