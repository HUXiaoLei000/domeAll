// 涉及到跨域  编写基本的接口
const http = require("http")

const server = http.createServer((req, res) => {
    res.end("holle world vue")
})

server.listen(3000)