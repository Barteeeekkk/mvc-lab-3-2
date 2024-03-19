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
        <title>Home</title>
    </head>
    <body>
        <form action="/form" method="POST" >
        
        <label for="name">name:</>
        <input type="text"  name="name"/><br>
            
        <label for="lastname">lastname:</>
        <input type="text"  name="lastname"/><br>
            
        <label for="age">age:</>
        <input type="number"  name="age"/><br>
            
        <label for="gender">gender:</>
        <select id="gender" name="gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select><br>
           
        <label for="code">code:</>
        <input type="number"  name="code"/><br>
            
        <label for="studyField">studyField:</>
        <input type="text"  name="studyField"/><br>

            <button >Send</button>
        </form>
    </body>
    </html>
    `) 
    
    response.end();
}

module.exports = renderPage;