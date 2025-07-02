import http from 'http';

const server = http.createServer((req,res)=>{
    res.end("Goodd Evng");
})

server.listen(5000,()=>{
    console.log("Server created successfully");
})