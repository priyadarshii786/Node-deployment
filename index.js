const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><body><h1>Hello world</h1></body></html>')
        res.end();
    }
    else if (req.url === '/about') {
        res.write('<html><body><h1>About Us</h1></body></html>')
    }
});
server.listen(port, () => console.log("Listening on port " + port))

