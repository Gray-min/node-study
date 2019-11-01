const http=require('http')
const server=http.createServer()

server.on('request',(request,response)=>(

    console.log(request),
    response.setHeader('Content-Type','text/html;charset=utf-8'),
    response.write("你好"),
    response.end()
))
server.listen(3000,()=>console.log("服务开启了"))