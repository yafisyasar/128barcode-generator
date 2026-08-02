const http = require('http');
const fs = require('fs');
const path = require('path');
const handler = require('./api/barcode.js');

const port = process.env.PORT || 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    const urlPath = (req.url || '/').split('?')[0];

    if (urlPath.startsWith('/api/')) {
        return handler(req, res);
    }

    let filePath = path.normalize(path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath));
    if (!filePath.startsWith(__dirname)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Not found');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', MIME_TYPES[path.extname(filePath)] || 'application/octet-stream');
        res.end(data);
    });
});

server.listen(port, () => {
    console.log('Server running at http://localhost:' + port + '/');
    console.log('API: http://localhost:' + port + '/api/barcode?value=1234567890');
    console.log('QR:  http://localhost:' + port + '/api/barcode?value=hello&format=qrcode');
});
