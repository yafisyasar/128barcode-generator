const bwipjs = require('bwip-js');

function readBody(req) {
    return new Promise((resolve) => {
        if (req.body) return resolve(req.body);
        let data = '';
        req.on('data', (chunk) => (data += chunk));
        req.on('end', () => {
            try {
                resolve(data ? JSON.parse(data) : {});
            } catch {
                resolve({});
            }
        });
    });
}

function sendJSON(res, status, obj) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(obj));
}

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    const query = new URL(req.url, 'http://localhost').searchParams;

    let params = {};
    if (req.method === 'POST') {
        params = await readBody(req);
    }

    const value = (query.get('value') || params.value || '').toString().trim();

    if (!value) {
        sendJSON(res, 400, {
            error: 'Missing "value" parameter.',
            usage: 'GET /api/barcode?value=1234567890 or POST { "value": "1234567890" }'
        });
        return;
    }

    const options = {
        bcid: 'code128',
        text: value,
        scale: Number(query.get('scale') || params.scale || 3),
        height: Number(query.get('height') || params.height || 20),
        includetext: true,
        textxalign: 'center',
        backgroundcolor: 'ffffff',
        barcolor: '000000'
    };

    try {
        const png = await bwipjs.toBuffer(options);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', 'inline; filename="barcode-' + value + '.png"');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.end(png);
    } catch (err) {
        sendJSON(res, 400, { error: err.message });
    }
};
