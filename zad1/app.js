const http = require("http");
const fs = require("fs");
const renderHomePage = require("./views/home");
const renderStudentPage = require("./views/student");

const PORT = 3000;


function requestListener(request, response){
    const { url } = request;

    if(url === "/" || url === "/home"){
        return renderHomePage(response, "home.html");
    }

    if(url === "/student"){
       return renderStudentPage(response, "student.html")
    }
    else{
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('Err');
    }

}

const server = http.createServer(requestListener);

server.listen(PORT,() =>{
    console.log(`Server is running on ${PORT} `)
});