const fs = require("fs")
const http = require("http")
http.createServer((req, res) => {

  if (req.url === '/') {
    fs.readFile('./views/index.html', (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
  } else if (req.url === "/post")
    fs.readFile('./views/post.html', (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
  else if (req.url.match("/public/"))
    fs.readFile('.' + req.url, (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
  else
    fs.readFile('./views/404.html', (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
}).listen(3000, () => console.log('服务启动'))