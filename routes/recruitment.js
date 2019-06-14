const express = require('express');
const router = express.Router();
const controller = require('../controllers/recruitment_site');

router.get('/', controller.list);
router.get('/:id', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;