const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

http.createServer((request, response) => {
  const requestedPath = new URL(request.url, 'http://localhost').pathname;
  const pathname = decodeURIComponent(requestedPath === '/' ? '/index.html' : requestedPath);
  const filePath = path.resolve(root, `.${pathname}`);

  if (!filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404).end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream'
    });
    response.end(content);
  });
}).listen(process.env.PORT || 4173, '127.0.0.1', () => {
  console.log(`SwasthyaSakhi is available at http://localhost:${process.env.PORT || 4173}`);
});