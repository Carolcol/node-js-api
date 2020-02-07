const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('/views/shop.html') //because it doesnt has next() it will stop here
});

module.exports = router;