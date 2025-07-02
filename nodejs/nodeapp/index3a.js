import http from 'http';

const server = http.createServer((req,res)=>{
    res.end("Goodd Mrng");
})

server.listen(4000,()=>{
    console.log("Server created successfully");
})