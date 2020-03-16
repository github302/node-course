const express = require('express');
const loggingMiddleware = require('./middleware/logging');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const hostname = 'localhost';
const port = 3000;
const app = express();
app.set('views', './views/');
app.set('view engine', 'hbs');

//  全局中间件
app.use(loggingMiddleware);
app.use(express.static('public'));

// Router也可以作为中间价加入到app中
app.use('/', indexRouter);
app.use('/api', apiRouter);

app.get('/broken', (req, res) => {
    throw new Error('error');
})

app.get('/api/test', (req, res) => {
    res.json({name: 'xiaoshuaitest', website: 'http://localhost:3000/'});
})

// app.get('/', (req, res) => {
//     // res.send('Hello xiaoshuai');
//     res.render('index');
// })
// app.get('/contact', (req, res) => {
//     res.render('contact');
// })

app.use('*', (req, res) =>  {
    res.status(404).render('404', {url: req.originalUrl });
})

// express内部的自定义错误处理函数
app.use((err, req, res, next) => {
    console.error(err.statck)
    res.status(500).render('500');
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})