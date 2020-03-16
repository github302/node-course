const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({name: 'xiaoshuai', url: 'http://localhost:3000'});
})

// curl localhost:3000/api/add
router.get('/new', (req, res) => {
    res.status(201).json({ msg: '新的内容，新的开始'});
})

// curl -X POST localhost:3000/api/add
router.post('/add', (req, res) => {
    res.status(200).json({ msg: '添加成功！'});
})

module.exports = router;