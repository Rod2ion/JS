const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
   if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html'});
     response.end('<h1>Welcome</h1>')
   }else if (url === '/about'){
   response.writeHead(200, { 'content-type': 'text/html'});
   response.end('<h1>About</h1>')
   } else{
    response.writeHead(404, { 'content-type': 'text/html'});
    response.end('<h1>Page not faund</h1>')
   }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
