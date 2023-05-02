const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal server error');
        console.error(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal server error');
        console.error(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        res.end(data);
      }
    });
  } else if (req.url === '/styles.css') {
    fs.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal server error');
        console.error(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
      }
    });
  } else if (req.url === '/image1.jpg') {
    const filePath = path.join(__dirname, 'image1.jpg');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal server error');
        console.error(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    });
  } else if (req.url === '/image2.jpg') {
    const filePath = path.join(__dirname, 'image2.jpg');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal server error');
        console.error(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

