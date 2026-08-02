const http = require('http');
const handler = require('./api/barcode.js');

const port = process.env.PORT || 3000;

const server = http.createServer(handler);

server.listen(port, () => {
    console.log('Barcode API running at http://localhost:' + port + '/api/barcode?value=1234567890');
});
