const express = require('express');
const someMiddleware = require('../middleware/router');
const router = express.Router();

// router也支持注册中间件和路由
router.use(someMiddleware);

router.get('/', (req, res) => {
    res.render('index');
})

router.get('concat', (req, res) => {
    res.render('concat');
})

module.exports = router;