// express的中间件就是一个function，这个函数有三个入参，req（Request对象）,res（Response对象）和next函数。
// 如果在中间件中调用next函数，那么中间件会按照use的顺序执行下去。由于中间件是按顺序执行的，因此配置中间件时顺序很重要。
// 中间件在执行内部逻辑时可以选择将请求传递给下一个中间件，也可以直接返回用户响应
// 如果忘记在中间件中调用next函数，并且又不直接返回响应时，服务器回直接卡在这个中间件不会继续执行下去。
function loggingMiddleware(req, res, next) {
    const time = new Date();
    console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
    next();
}
module.exports = loggingMiddleware;