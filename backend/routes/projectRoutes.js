const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { ingestRepo } = require('../controllers/projectController');

router.post('/', auth, ingestRepo);

module.exports = router;
