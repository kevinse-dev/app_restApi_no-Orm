const express = require('express');
const auth = require('./auth');
const verification = require('./verification');
const router = express.Router()

router.post('/api/v1/register', auth.registrasi)
router.post('/api/v1/login', auth.login)

// dashboard for role 2
router.get('/api/v1/dashboard', verification(), auth.dashboard)



module.exports = router