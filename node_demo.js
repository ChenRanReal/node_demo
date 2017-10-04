// console.log("hello world")

// var aa = "hello world"

// console.log(aa.length)

'usr strict';//使用严格模式

const http = require("http");//获取node内置的http对象
let servre = http.createServer((req, resp) => {
    resp.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    })
    resp.write("hello world");
    resp.end();
})
servre.listen("8888", () => { console.log("node服务器开始运行") });