const fs = require("fs")
const http = require("http")
const template = require("art-template")
const path = require('path')
const url = require('url')
const comments = {
  comments: [{ name: '张三', comment: '不错' }, { name: '张三', comment: '不错' }, { name: '张三', comment: '不错' }]
}
http.createServer((req, res) => {

  const relPath = url.parse(req.url.toString(), true).pathname
  console.log(relPath)
  if (relPath === '/') {
    // console.log(path.join(__dirname, './views/index.html'))
    fs.readFile(path.join(__dirname, './views/index.html'),
      (err, data) => err ? console.log("404 NOTFOUND") : res.end(template.render(data.toString(), comments)))
  } else if (relPath === "/post")
    fs.readFile('./views/post.html', (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
  else if (relPath.match("/public/"))
    fs.readFile('.' + relPath, (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
  else if (relPath == "/pinglun") {
    comments.comments.unshift(url.parse(req.url.toString(), true).query)
    //服务器让客户端重定向方法
    //1、302零时重定向statusCode
    //2、header头设置Location setHeader("Location",'/')
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
  else
    fs.readFile('./views/404.html', (err, data) => err ? console.log("404 NOTFOUND") : res.end(data))
}).listen(3000, () => console.log('服务启动'))