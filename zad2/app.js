const http = require("http");
const fs = require("fs");
const renderHomePage = require("./views/home");
const renderStudentPage = require("./views/student");

const PORT = 3000;


function requestListener(request, response){
    const { url } = request;
    const { method} = request;

    if(url === "/" || url === "/home"){
        renderHomePage(response, "home.html");
        }

    else if(url === "/student"){
       return renderStudentPage(response, "student.html")
    }
    else if(url === "/form" && method == "POST"){
        const body = [];
    request.on("data", (chunk) => {
        body.push(chunk);
    });
    return request.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const form = parsedBody.split("=")[1];
        fs.writeFileSync("form.txt", form);
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
    })
    } else{
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('Err');
    }

}

const server = http.createServer(requestListener);

server.listen(PORT,() =>{
    console.log(`Server is running on ${PORT} `)
});