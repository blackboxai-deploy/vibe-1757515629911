const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        // Serve the main HTML file
        fs.readFile('distinctive-academy-management.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('File not found');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Distinctive Academy Management Portal running at http://localhost:${PORT}`);
    console.log('📧 Demo Login: admin@distinctiveacademy.com');
    console.log('🔑 Demo Password: admin123');
});