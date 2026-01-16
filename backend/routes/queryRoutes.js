const express = require('express');
const { queryProject } = require('../controllers/queryController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:projectId', authMiddleware, queryProject);

module.exports = router;
