const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Express index router!');
});

module.exports = router;