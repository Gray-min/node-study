const fs=require('fs')
fs.readFile("./hello.text",(error,data)=>console.log(data.toString()))