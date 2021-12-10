const http = require('http');
const fs =require('fs');
const port = 4444;

const server = http.createServer((req,res)=>{
    console.log("new "+req.method+" request!\t"+req.url);
    switch(true){

        case req.url === "/" && req.method === "GET":
            fs.readFile("./view/index.html", (err, data)=>{
                if(err) throw err;
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data)
            })
        break;
        case req.url === "script.js" && req.method === "GET":
            fs.readFile("./public/script.js", (err, data)=>{
                if(err) throw err;
                res.setHeader('Content-Type', 'application/javascript');
                res.writeHead(200);
                res.end(data)
            })
        break;
        case req.url === "diszek.js" && req.method === "GET":
            fs.readFile("./datas/diszek.json", (err, data)=>{
                if(err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(data)
            })
        break;
        case req.url === "style.css" && req.method === "GET":
            fs.readFile("./view/xmas.css", (err, data)=>{
                if(err) throw err;
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data)
            })
        break;


        default:
            fs.readFile("./view/err.html",(err,data)=>{
                if(err) throw err;
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404);
                res.end(data)
            })
    }

});
server.listen(port);