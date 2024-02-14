const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/') res.end('here we go');
    if(req.url==='/about') res.end('this is the about page');
    res.end(`<p>hello this is an error</p>`);
})

server.listen(5000);