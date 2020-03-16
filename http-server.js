// 用node自带的http模块启动一个服务
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('Hello xiaoshuai\n');
})

server.listen(port, () => {
    console.log(`server running at http://${hostname}:${port}`);
})