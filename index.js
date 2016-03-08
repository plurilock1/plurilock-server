const ws = require('nodejs-websocket');

var server = ws.createServer(conn => {
  console.log('Connection opened.');
  conn.on('text', str => console.log(str));
  conn.on('close', (code, reason) => console.log('Connection closed.'));
}).listen(8080);