const express = require('express')

const authController = require('../controllers/auth.controller')
const router = express.Router()

router.get('/signup', authControll.getSignup )

module.exports = router