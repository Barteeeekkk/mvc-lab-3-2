const fs = require('fs');
const path = require('path');

function renderPage(response, pageName) {
    const filePath = path.join(__dirname, 'views', pageName);
    const fileName = path.basename(pageName, '.html');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write( `
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student</title>
    </head>
    <body>
        <div>Student</div>
    </body>
    </html>
    `) 
    
    response.end();
}

module.exports = renderPage;