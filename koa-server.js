const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const path = require('path');
const login = require('./routes/login');
let router = new Router();
const app = new Koa();

// router.use(login.routes());
// app.use(router.routes());

app.use(koaStatic(path.join(__dirname, './dist')));
app.use(login.routes());

app.listen(5000, () => {
    console.log("server start at 5000");
})