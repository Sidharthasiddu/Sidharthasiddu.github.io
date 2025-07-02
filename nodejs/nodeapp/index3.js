import http from 'http';

let server = http.createServer((req, res) => {
    res.end("Request received...");
});

server.listen(3000, () => {
    console.log("Server started");
});