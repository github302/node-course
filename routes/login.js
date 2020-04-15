const Router = require('koa-router');
const checkLogin = require('../middleware/check-login');
const home = new Router();

home.all('/', async(ctx) => {
    ctx.body = "success";
})

home.get('/login', checkLogin(), async (ctx) => {
    console.log('login');
    const aaa = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo')
        }, 3000)
    })
    ctx.redirect('/select')
});
home.get('/select', async(ctx) => {
    console.log('select');
    const aaa = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo111')
        }, 1000)
    })
    ctx.body = aaa;
    
})
module.exports = home;