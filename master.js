const http = require('http');
const fork = require('child_process').fork;
const cpus = require('os').cpus();
const cluster = require('cluster');
const numCPUs = cpus.length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('hello world\n');
    }).listen(8000);
  
    console.log(`Worker ${process.pid} started`);
  }